import path from "node:path";
import { spawn } from "node:child_process";
import { createServer } from "vite";
import electron from "electron";

const env = { ...process.env };

delete env.ELECTRON_RUN_AS_NODE;

const server = await createServer({
  root: path.resolve(import.meta.dirname, "../../nozomi-ui"),
});

await server.listen();
server.printUrls();

// Electron exports a command line, but I had to force casting as string, since electron documented default export as a namespaced api.
// Yeah, I know this is agly.
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
