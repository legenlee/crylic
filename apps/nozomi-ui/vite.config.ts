import path from "node:path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vuetify from "vite-plugin-vuetify";

function resolveFromRoot(target: string) {
  return path.resolve(import.meta.dirname, target);
}

export default defineConfig({
  base: "./",
  plugins: [
    vue(),
    vuetify({
      // Prefer explicit import. This can reduce more bundle size.
      autoImport: false,
      styles: {
        configFile: resolveFromRoot("./src/app/styles/settings.scss"),
      },
    }),
  ],
  resolve: {
    alias: {
      "@": resolveFromRoot("./src"),
    },
  },
});
