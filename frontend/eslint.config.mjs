import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([
    "node_modules/**",
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      // Project-specific relaxations
      "@typescript-eslint/no-explicit-any": "off",
      "prefer-const": "off",
      "@next/next/no-img-element": "off",
    },
  },
]);

export default eslintConfig;
