import type { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    async component() {
      return (await import("./home")).HomeView;
    },
  },
];
