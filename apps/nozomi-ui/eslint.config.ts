import { defineConfig } from "eslint/config";
import { eslintConfig } from "@nozomi/config";
import globals from "globals";
import ts from "typescript-eslint";
import vue from "eslint-plugin-vue";
import prettier from "eslint-config-prettier";

export default defineConfig(
  {
    ignores: ["*.d.ts", "**/coverage", "**/dist"],
    extends: [eslintConfig.tsStrict, vue.configs["flat/recommended"]],
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
