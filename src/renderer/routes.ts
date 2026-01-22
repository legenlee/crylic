import { RouteRecordRaw } from "vue-router";

import ProfilesView from "./views/ProfilesView.vue";
import ProfileDetailView from "./views/ProfileDetailView.vue";
import SettingsView from "./views/SettingsView.vue";

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
    component: ProfilesView,
  },
  {
    name: RouteNames.PROFILE_DETAIL,
    path: "/profiles/:id",
    component: ProfileDetailView,
  },
  {
    name: RouteNames.SETTINGS,
    path: "/settings",
    component: SettingsView,
  },
];
