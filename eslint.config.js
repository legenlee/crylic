import { defineConfig } from "eslint/config";
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
      parserOptions: {
        parser: typescriptEslint.parser,
      },
    },
  },
  eslintConfigPrettier,
);
