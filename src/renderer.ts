import { createApp } from "vue";
import { router } from "./renderer/plugins/router";
import { pinia } from "./renderer/plugins/pinia";
import { vuetify } from "./renderer/plugins/vuetify";

import App from "./renderer/App.vue";

createApp(App).use(router).use(pinia).use(vuetify).mount("#app");
