export const RouteNames = {
  HOME: "home",
  ABOUT: "about",
} as const;

export const routes = [
  {
    name: RouteNames.HOME,
    path: "/",
    component: () => import("./views/HomeView.vue"),
  },
  {
    name: RouteNames.ABOUT,
    path: "/about",
    component: () => import("./views/AboutView.vue"),
  },
];
