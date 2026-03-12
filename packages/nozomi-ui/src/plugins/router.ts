import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw,
} from "vue-router";
import MainLayout from "../layouts/MainLayout.vue";
import HomeView from "../views/HomeView.vue";
import NotFoundView from "../views/errors/NotFoundView.vue";
import DetailView from "../views/DetailView.vue";

export const RouteNames = {
  Home: "home",
  Detail: "detail",
};

const MainRoutes: RouteRecordRaw = {
  path: "/",
  component: MainLayout,
  children: [
    {
      name: RouteNames.Home,
      path: "",
      component: HomeView,
    },
    {
      name: RouteNames.Detail,
      path: "profiles/:id",
      component: DetailView,
    },
  ],
} as const;

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [MainRoutes, { path: "/:pathMatch(.*)", component: NotFoundView }],
});
