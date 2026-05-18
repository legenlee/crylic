import { defineConfig } from "eslint/config";
import { eslintConfig } from "@nozomi/config";
import prettier from "eslint-config-prettier";

export default defineConfig(
  {
    ignores: ["**/dist"],
    extends: [eslintConfig.tsStrict],
  },
  prettier,
);
