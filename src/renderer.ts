import { createApp } from "vue";
import { router } from "./renderer/plugins/router";
import { pinia } from "./renderer/plugins/pinia";
import { vuetify } from "./renderer/plugins/vuetify";

import App from "./renderer/App.vue";

import "./renderer/styles/index.css";

createApp(App).use(router).use(pinia).use(vuetify).mount("#app");
