/* eslint-disable import/no-unresolved */
import { createApp } from "vue";
import { createPinia } from "pinia";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { en, ko } from "vuetify/locale";

import App from "./App.vue";
import { router } from "./routes";

const pinia = createPinia();

const vuetify = createVuetify({
  components,
  directives,
  locale: {
    messages: { ko, en },
    fallback: "en",
  },
});

createApp(App).use(router).use(pinia).use(vuetify).mount("#app");
