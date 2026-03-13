import { defineConfig } from "eslint/config";
import globals from "globals";
import eslint from "@eslint/js";
import typescriptEslint from "typescript-eslint";
import eslintPluginVue from "eslint-plugin-vue";
import eslintConfigPrettier from "eslint-config-prettier";

export default defineConfig(
  eslint.configs.recommended,
  typescriptEslint.configs.strict,
  eslintPluginVue.configs["flat/recommended"],
  {
    ignores: ["eslint.config.js"],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        parser: typescriptEslint.parser,
      },
    },
  },
  eslintConfigPrettier,
);
