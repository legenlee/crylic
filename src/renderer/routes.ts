import { RouteRecordRaw } from "vue-router";

export enum RouteNames {
  INIT = "init",
  PROFILES = "profiles",
  PROFILE_DETAIL = "profile-detail",
  SETTINGS = "settings",
}

export const routes: RouteRecordRaw[] = [
  {
    name: RouteNames.INIT,
    path: "/",
    redirect: {
      name: RouteNames.PROFILES,
      replace: true,
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
  {
    name: RouteNames.SETTINGS,
    path: "/settings",
    component: () => import("./views/SettingsView.vue"),
  },
];
