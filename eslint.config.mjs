import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

/**
 * * Specifying different configurations for TypeScript files (.ts, .mts) and JavaScript files.
 *
 * For TypeScript files:
 * added Node.js and Express globals, which are more appropriate for the server environment.
 * specified the TypeScript parser and pointed it to tsconfig.json file.
 * included both recommended JavaScript and TypeScript rules.
 *
 * For JavaScript files, we're using the recommended JavaScript configuration.
 *
 * Added files such as node_modules and dist to ignores.
 */

/**
 * TODO: do "npm run lint" before committing or to check for potential issues
 * TODO: In order to fix any issues, run "npm run lint:fix"
 *
 * ! In order to do any of those commands above, add the scripts to package.json!
 */

export default [
  {
    ignores: ["node_modules/**", "dist/**"],
  },
  {
    files: ["**/*.{ts,mts}"],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.express,
      },
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        project: "./tsconfig.json",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      "no-unused-vars": "off", // Disable the base rule as it can report incorrect errors
      "@typescript-eslint/no-unused-vars": ["error"], // Enable the TypeScript specific rule
    },
  },
  {
    files: ["**/*.js", "**/*.mjs", "**/*.cjs"],
    languageOptions: {
      globals: globals.es2021,
    },
    ...pluginJs.configs.recommended,
  },
];
