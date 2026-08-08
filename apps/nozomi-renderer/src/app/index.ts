import { createApp } from "vue";
import { router, vuetify } from "./plugins";
import App from "./App.vue";

export const app = createApp(App).use(router).use(vuetify);
