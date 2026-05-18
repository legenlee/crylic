import type { Config } from "prettier";
import { prettierConfig } from "@nozomi/config";

export default {
  ...prettierConfig.normal,
} as Config;
