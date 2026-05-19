import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import ts from "typescript-eslint";

export const jsRecommended = defineConfig(js.configs.recommended);

export const tsRecommended = defineConfig(
  js.configs.recommended,
  ts.configs.recommended,
);

export const tsStrict = defineConfig(js.configs.recommended, ts.configs.strict);
