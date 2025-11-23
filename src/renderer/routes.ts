import { RouteRecordRaw } from "vue-router";

export const RouteNames = {
  INIT: "init",
  PROFILES: "profiles",
  PROFILE_DETAIL: "profile-detail",
} as const;

export const routes: RouteRecordRaw[] = [
  {
    name: RouteNames.INIT,
    path: "/",
    redirect: {
      name: RouteNames.PROFILES,
    },
  },
  {
    name: RouteNames.PROFILES,
    path: "/profiles",
    component: () => import("./views/ProfilesView.vue"),
  },
  {
    name: RouteNames.PROFILE_DETAIL,
    path: "/profiles/:id",
    component: () => import("./views/ProfileDetailView.vue"),
  },
];
