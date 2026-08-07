// Vuetify
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import { md3 } from "vuetify/blueprints";
import { generatePaletteFromRGBA } from "@/shared/lib/m3yTheme";
import { BRAND_COLOR } from "@/shared/config/color";

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

const brandPalette = generatePaletteFromRGBA(BRAND_COLOR);

export const vuetify = createVuetify({
  blueprint: md3,
  icons: {
    defaultSet: "mdi",
  },
  theme: {
    themes: {
      light: {
        colors: brandPalette.light,
        dark: false,
      },
      dark: {
        colors: brandPalette.dark,
        dark: true,
      },
    },
  },
});
