import { defineConfig } from "eslint/config";
import eslint from "@eslint/js";
import typescriptEslint from "typescript-eslint";
import eslintPluginVue from "eslint-plugin-vue";
import eslintConfigPrettier from "eslint-config-prettier";

export default defineConfig(
  {
    extends: [
      eslint.configs.recommended,
      ...typescriptEslint.configs.strict,
      ...eslintPluginVue.configs["flat/recommended"],
    ],
    languageOptions: {
      parserOptions: {
        parser: typescriptEslint.parser,
      },
    },
  },
  eslintConfigPrettier,
);
