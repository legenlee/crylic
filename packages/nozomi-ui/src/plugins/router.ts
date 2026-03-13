import { createRouter, createWebHistory } from "vue-router";
import { MAIN_ROUTE_NAMES, SETTINGS_ROUTE_NAMES } from "../constants/route";
import MainLayout from "../layouts/MainLayout.vue";
import SettingsLayout from "../layouts/SettingsLayout.vue";
import HomeView from "../views/HomeView.vue";
import NotFoundView from "../views/errors/NotFoundView.vue";
import DetailView from "../views/DetailView.vue";
import SettingsView from "../views/SettingsView.vue";
import { MainRouteBuilder, SettingsRouteBuilder } from "../utils/router";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    new MainRouteBuilder("/", MainLayout)
      .add("", MAIN_ROUTE_NAMES.home, HomeView)
      .add("profiles/:id", MAIN_ROUTE_NAMES.detail, DetailView)
      .build(),
    new SettingsRouteBuilder("/settings/", SettingsLayout)
      .add("", SETTINGS_ROUTE_NAMES.settings, SettingsView)
      .build(),
    { path: "/:pathMatch(.*)", component: NotFoundView },
  ],
});
