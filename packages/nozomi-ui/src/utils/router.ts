import type { Component } from "vue";
import type { RouteRecordRaw } from "vue-router";
import type {
  MAIN_ROUTE_NAMES,
  SETTINGS_ROUTE_NAMES,
} from "../constants/route";

interface RouteBuilder {
  add(path: string, name: string, ...args: unknown[]): this;
  build(): RouteRecordRaw;
}

export class MainRouteBuilder implements RouteBuilder {
  #basePath: string;
  #layoutComponent: Component;
  #routes: RouteRecordRaw[] = [];

  constructor(basePath: string, layoutComponent: Component) {
    this.#basePath = basePath;
    this.#layoutComponent = layoutComponent;
  }

  add(path: string, name: keyof typeof MAIN_ROUTE_NAMES, component: Component) {
    this.#routes.push({
      path,
      name,
      component,
    });

    return this;
  }

  build() {
    return {
      path: this.#basePath,
      component: this.#layoutComponent,
      children: this.#routes,
    };
  }
}

export class SettingsRouteBuilder implements RouteBuilder {
  #basePath: string;
  #layoutComponent: Component;
  #routes: RouteRecordRaw[] = [];

  constructor(basePath: string, layoutComponent: Component) {
    this.#basePath = basePath;
    this.#layoutComponent = layoutComponent;
  }

  add(
    path: string,
    name: keyof typeof SETTINGS_ROUTE_NAMES,
    component: Component,
  ) {
    this.#routes.push({
      path,
      name,
      component,
    });

    return this;
  }

  build() {
    return {
      path: this.#basePath,
      component: this.#layoutComponent,
      children: this.#routes,
    };
  }
}
