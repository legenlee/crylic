import path from "node:path";
import { spawn } from "node:child_process";
import { createServer } from "vite";
import electron from "electron";

const env = { ...process.env };
const RENDERER_ROOT = path.resolve(import.meta.dirname, "../../nozomi-ui");

delete env.ELECTRON_RUN_AS_NODE;

process.chdir(RENDERER_ROOT);
const server = await createServer({
  root: RENDERER_ROOT,
});

await server.listen();
server.printUrls();

// Electron exports a command line, but I had to force casting as string, since electron documented default export as a namespaced api.
// Yeah, I know this is ugly.
const child = spawn(electron as unknown as string, ["."], {
  cwd: path.resolve(import.meta.dirname, "../"),
  env: {
    ...env,
    VITE_DEV_SERVER_URL: server.resolvedUrls?.local[0],
  },
  stdio: "inherit",
});

const exit = async () => {
  await server.close();
  process.exit(0);
};

child.on("close", exit);
process.on("SIGINT", () => child.kill());
