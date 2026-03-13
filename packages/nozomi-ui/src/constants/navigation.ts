import { MAIN_ROUTE_NAMES, SETTINGS_ROUTE_NAMES } from "./route";

type MenuItem = {
  prependIcon: string;
  title: string;
  to: {
    name: string;
  };
};

const menuProps = {
  density: "compact",
  exact: true,
};

const menuItemMapper = (m: MenuItem) => {
  return {
    props: { ...menuProps, ...m },
  };
};

const menuItems: MenuItem[] = [
  {
    prependIcon: "mdi-bookshelf",
    title: "Library",
    to: {
      name: MAIN_ROUTE_NAMES.home,
    },
  },
];

const appendMenuItems: MenuItem[] = [
  {
    prependIcon: "mdi-cog",
    title: "Settings",
    to: {
      name: SETTINGS_ROUTE_NAMES.settings,
    },
  },
];

export const NAVIGATION_DRAWER = {
  default: menuItems.map(menuItemMapper),
  append: appendMenuItems.map(menuItemMapper),
};
