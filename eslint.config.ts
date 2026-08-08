import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import ts from "typescript-eslint";
import vue from "eslint-plugin-vue";
import prettier from "eslint-config-prettier";

export default defineConfig(
  js.configs.recommended,
  ts.configs.strict,
  vue.configs["flat/recommended"],
  {
    ignores: ["*.d.ts", "**/coverage/**", "**/dist/**"],
  },
  {
    files: ["**/*.{ts,vue}"],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        parser: ts.parser,
      },
    },
  },
  prettier,
);
