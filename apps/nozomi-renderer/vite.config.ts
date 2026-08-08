import path from "node:path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vuetify from "vite-plugin-vuetify";

function resolveFromProject(target: string) {
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
        configFile: resolveFromProject("./src/app/styles/settings.scss"),
      },
    }),
  ],
  resolve: {
    alias: {
      "@": resolveFromProject("./src"),
    },
  },
  build: {
    emptyOutDir: true,
    // Places bundle to main package dist directory
    outDir: resolveFromProject("../nozomi-main/dist/renderer"),
  },
});
