import { createWebHashHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("./views/HomeView.vue"),
  },
  {
    path: "/about",
    component: () => import("./views/AboutView.vue"),
  },
] as const;

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
