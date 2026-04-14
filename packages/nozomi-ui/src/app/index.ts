import { createApp } from "vue";

import App from "@/app/App.vue";
import { router, pinia, vuetify } from "@/app/providers";

export function bootstrap(selectors: string) {
  createApp(App).use(router).use(pinia).use(vuetify).mount(selectors);
}
