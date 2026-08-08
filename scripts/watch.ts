import { ChildProcess, spawn } from "node:child_process";
import path from "node:path";
import { createServer } from "vite";
import { watch } from "rolldown";
import electron from "electron";
import mainConfig from "../apps/nozomi-main/rolldown.config.ts";

const mainPath = path.resolve(import.meta.dirname, "../apps/nozomi-main");
// Disables prettier for preventing wrapping
// prettier-ignore
const rendererPath = path.resolve(import.meta.dirname, "../apps/nozomi-renderer");

let child: ChildProcess | null = null;
let watcherStatus: "init" | "normal" | "error" | "restart" = "init";

// Start the renderer vite dev server;
process.chdir(rendererPath);
const rendererServer = await createServer({
  root: rendererPath,
});
await rendererServer.listen();
rendererServer.printUrls();

// Electron exports a command line string, but node resolving as a namespaced API.
// Yeah, I know this is ugly.
const spawnElectron = () =>
  spawn(electron as unknown as string, ["."], {
    cwd: mainPath,
    stdio: "inherit",
    env: {
      ...process.env,
      VITE_DEV_SERVER_URL: rendererServer.resolvedUrls?.local[0],
    },
  });

const exit = async () => {
  await watcher.close();
  await rendererServer.close();
  child?.kill();

  process.exit(0);
};

const handleClose = () => {
  if (watcherStatus === "restart") {
    return;
  }

  void exit();
};

const start = () => {
  watcherStatus = "normal";
  child = spawnElectron();
  child.on("close", handleClose);
};

const restart = async () => {
  watcherStatus = "restart";
  const waitForKill = () =>
    new Promise((callback) => child?.once("close", callback));

  child?.kill();
  await waitForKill();

  start();
};

const watcher = watch(mainConfig.map((entry) => ({ ...entry, cwd: mainPath })));

watcher.on("event", async (event) => {
  switch (event.code) {
    case "START": {
      if (watcherStatus !== "init") {
        watcherStatus = "normal";
      }

      break;
    }

    case "BUNDLE_END": {
      await event.result.close();
      break;
    }

    case "ERROR": {
      watcherStatus = "error";
      console.error(event.error);
      break;
    }

    case "END": {
      if (watcherStatus === "init") {
        start();
      } else if (watcherStatus !== "error") {
        await restart();
      }

      break;
    }
  }
});

process.on("SIGINT", exit);
