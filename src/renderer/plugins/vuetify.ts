/* eslint-disable import/no-unresolved */
import "@fontsource/roboto/100.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";

import "@fontsource/roboto/100-italic.css";
import "@fontsource/roboto/300-italic.css";
import "@fontsource/roboto/400-italic.css";
import "@fontsource/roboto/500-italic.css";
import "@fontsource/roboto/700-italic.css";
import "@fontsource/roboto/900-italic.css";

import "@mdi/font/css/materialdesignicons.css";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { en, ko } from "vuetify/locale";
import { md3 } from "vuetify/blueprints";

export const vuetify = createVuetify({
  blueprint: md3,
  components,
  directives,
  locale: {
    messages: { ko, en },
    fallback: "en",
  },
  icons: {
    defaultSet: "mdi",
  },
  theme: {
    defaultTheme: "system",
  },
});
