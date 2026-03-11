import {
  createWebHashHistory,
  createRouter,
  type RouteRecordRaw,
} from "vue-router";

import MainLayout from "../layouts/MainLayout.vue";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";

export const RouteNames = {
  Home: "home",
  About: "about",
};

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: MainLayout,
    children: [
      {
        name: RouteNames.Home,
        path: "",
        component: HomeView,
      },
      {
        name: RouteNames.About,
        path: "about",
        component: AboutView,
      },
    ],
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
