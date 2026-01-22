import { createApp } from "vue";
import { router } from "./plugins/router";
import { pinia } from "./plugins/pinia";
import { vuetify } from "./plugins/vuetify";

import App from "./App.vue";

createApp(App).use(router).use(pinia).use(vuetify).mount("#app");
