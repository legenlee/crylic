import { createApp } from "vue";
import { vuetify } from "@/app/plugins/vuetify";
import App from "./App.vue";

export const app = createApp(App).use(vuetify);
