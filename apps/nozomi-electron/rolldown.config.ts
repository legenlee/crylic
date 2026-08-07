import path from "node:path";
import fs from "node:fs/promises";
import { defineConfig, type RolldownPluginOption } from "rolldown";

const copyRenderer: RolldownPluginOption = {
  name: "copy-renderer",
  async writeBundle() {
    const renderer = path.resolve(import.meta.dirname, "../nozomi-ui/dist");
    const dest = path.resolve(import.meta.dirname, "./dist/renderer");

    const statResult = await fs.stat(renderer).catch(() => null);

    if (!statResult) {
      throw new Error(
        "Expected html is bundled but no bundled html. Please run root build or ui build script.",
      );
    }

    await fs.rm(dest, { recursive: true, force: true });
    await fs.cp(renderer, dest, { recursive: true });
  },
};

export default defineConfig([
  {
    plugins: [copyRenderer],
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
