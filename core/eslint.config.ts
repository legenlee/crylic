import { defineConfig } from "eslint/config";
import { eslintConfig } from "@nozomi/config";
import prettier from "eslint-config-prettier";
import globals from "globals";

export default defineConfig(
  {
    extends: [eslintConfig.tsStrict],
    languageOptions: {
      globals: globals.node,
    },
  },
  prettier,
);
