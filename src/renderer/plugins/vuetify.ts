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
import { createVuetify, ThemeDefinition } from "vuetify";
import { en, ko } from "vuetify/locale";
import { md3 } from "vuetify/blueprints";

const primaryColors = {
  primary: "#88ae7b",
  "primary-darken-1": "#7ea26f",
};

const light: ThemeDefinition = {
  colors: {
    ...primaryColors,
    surface: "#f3f7f2",
    background: "#e7eee4",
  },
};

const dark: ThemeDefinition = {
  dark: true,
  colors: {
    ...primaryColors,
    background: "#181914",
    surface: "#303228",
  },
};

export const vuetify = createVuetify({
  blueprint: md3,
  defaults: {
    VBtn: {
      elevation: 0,
    },
    VCheckbox: {
      color: "primary",
    },
    VCheckboxBtn: {
      color: "primary",
    },
    VDialog: {
      scrollable: true,
      width: "70%",
      height: "70%",
    },
  },
  locale: {
    messages: { ko, en },
    fallback: "en",
  },
  icons: {
    defaultSet: "mdi",
  },
  theme: {
    defaultTheme: "system",
    themes: {
      light,
      dark,
    },
  },
});
