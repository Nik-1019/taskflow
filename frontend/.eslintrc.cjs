module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  plugins: ["@typescript-eslint"],
  ignorePatterns: ["dist", ".eslintrc.cjs", "node_modules"],
  rules: {
    // TODO: Tighten rules (e.g. react-hooks, import ordering) as the app grows.
  },
};
