import type { RouteRecordRaw } from "vue-router";
import { MainLayout } from "./layout";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: MainLayout,
    children: [
      {
        path: "",
        async component() {
          return (await import("./home")).HomeView;
        },
      },
    ],
  },
];
