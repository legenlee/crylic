import {
  createMemoryHistory,
  createRouter,
  type RouteRecordRaw,
} from "vue-router";

export const RouteNames = {
  Home: "home",
};

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("../layouts/MainLayout.vue"),
    children: [
      {
        name: RouteNames.Home,
        path: "",
        component: () => import("../views/HomeView.vue"),
      },
    ],
  },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
