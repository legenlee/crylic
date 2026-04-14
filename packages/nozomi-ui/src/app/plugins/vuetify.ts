import "vuetify/styles";

import "@mdi/font/css/materialdesignicons.css";

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

// import "@fontsource/google-sans-flex/100.css";
// import "@fontsource/google-sans-flex/200.css";
// import "@fontsource/google-sans-flex/300.css";
// import "@fontsource/google-sans-flex/400.css";
// import "@fontsource/google-sans-flex/500.css";
// import "@fontsource/google-sans-flex/600.css";
// import "@fontsource/google-sans-flex/700.css";
// import "@fontsource/google-sans-flex/800.css";
// import "@fontsource/google-sans-flex/900.css";

import { createVuetify } from "vuetify";
import colors from "vuetify/util/colors";

export const vuetify = createVuetify({
  defaults: {
    global: {
      elevation: 0,
    },
  },
  icons: {
    defaultSet: "mdi",
  },
  theme: {
    themes: {
      light: {
        colors: {
          surface: colors.grey.lighten4,
        },
      },
    },
  },
});
