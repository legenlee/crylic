import path from "node:path";
import { ChildProcess, spawn } from "node:child_process";
import { watch } from "rolldown";
import { createServer } from "vite";
import electron from "electron";
// @ts-expect-error: Runs only in Node. Node cannot resolve scripts without extension.
import config from "../rolldown.config.ts";

const env = { ...process.env };

delete env.ELECTRON_RUN_AS_NODE;

const root = path.resolve(import.meta.dirname, "../");
const rendererRoot = path.resolve(import.meta.dirname, "../../nozomi-ui");
const rootConfig = config.map((entry) => ({
  ...entry,
  cwd: root,
  // Vite server will be startup. No need to copy the renderer bundle.
  plugins: [],
}));

// Resolving vite-plugin-vue something
process.chdir(rendererRoot);
const rendererServer = await createServer({
  root: rendererRoot,
});

await rendererServer.listen();
rendererServer.printUrls();

// Electron exports a command line, but I had to force casting as string, since electron documented default export as a namespaced api.
// Yeah, I know this is ugly.
const spawnProcess = () =>
  spawn(electron as unknown as string, ["."], {
    cwd: root,
    env: {
      ...env,
      VITE_DEV_SERVER_URL: rendererServer.resolvedUrls?.local[0],
    },
    stdio: "inherit",
  });

type ProcessStatus = "normal" | "error" | "restarting";
let processStatus: ProcessStatus = "normal";

let child: ChildProcess | null = null;
const watcher = watch(rootConfig);

const exit = async () => {
  await watcher.close();
  await rendererServer.close();
  child?.kill();

  process.exit(0);
};

const handleClose = () => {
  if (processStatus === "restarting") {
    return;
  }

  void exit();
};

const restart = async () => {
  if (child) {
    processStatus = "restarting";
    const exited = () =>
      new Promise((callback) => child?.once("close", callback));

    child?.kill();
    await exited();
  }

  processStatus = "normal";
  child = spawnProcess();
  child.on("close", handleClose);
};

watcher.on("event", async (event) => {
  switch (event.code) {
    case "START": {
      processStatus = "normal";
      break;
    }

    case "BUNDLE_END": {
      await event.result.close();
      break;
    }

    case "END": {
      if (processStatus === "error") {
        return;
      }

      await restart();
      break;
    }

    case "ERROR": {
      processStatus = "error";
      console.error(event.error);
      break;
    }
  }
});

process.on("SIGINT", exit);
