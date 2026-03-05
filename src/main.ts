import { createApp } from "vue";
import { vuetify } from "./plugins/vuetify";
import { pinia } from "./plugins/pinia";
import { router } from "./plugins/router";

import App from "./App.vue";

createApp(App).use(pinia).use(router).use(vuetify).mount("#app");
