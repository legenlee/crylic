import { defineConfig } from "rolldown";

export default defineConfig([
  {
    input: "src/index.ts",
    output: {
      file: "dist/index.js",
      format: "esm",
    },
    platform: "node",
    external: ["electron"],
  },
  {
    input: "src/preload.ts",
    output: {
      file: "dist/preload.cjs",
      format: "cjs",
    },
    platform: "node",
    external: ["electron"],
  },
]);
