export const ROUTE_NAMES = {
  HOME: "home",
  ABOUT: "about",
};

export const routes = [
  {
    name: ROUTE_NAMES.HOME,
    path: "/",
    component: () => import("./views/HomeView.vue"),
  },
  {
    name: ROUTE_NAMES.ABOUT,
    path: "/about",
    component: () => import("./views/AboutView.vue"),
  },
] as const;
