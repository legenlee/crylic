import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vuetify from "vite-plugin-vuetify";

// https://vitejs.dev/config
export default defineConfig({
  css: {
    preprocessorOptions: {
      sass: {
        api: "modern",
        quietDeps: true,
        silenceDeprecations: ["if-function"],
      },
      scss: {
        api: "modern",
        quietDeps: true,
        silenceDeprecations: ["if-function"],
      },
    },
  },
  plugins: [
    vue(),
    vuetify({
      styles: {
        configFile: "src/renderer/styles/settings.scss",
      },
    }),
  ],
});
