import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vuetify from "vite-plugin-vuetify";

// https://vitejs.dev/config
export default defineConfig({
  css: {
    preprocessorOptions: {
      sass: {
        api: "modern-compiler",
        quietDeps: true,
      },
    },
  },
  plugins: [
    vue(),
    vuetify({
      styles: {
        configFile: "src/renderer/styles/vuetify/settings.scss",
      },
    }),
  ],
});
