import "vuetify/styles/main.css";
import { createVuetify } from "vuetify";
import { md3 } from "vuetify/blueprints";

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

export const vuetify = createVuetify({
  blueprint: md3,
  icons: {
    defaultSet: "mdi",
  },
});
