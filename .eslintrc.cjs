module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  ignorePatterns: [".eslintrc.cjs", "convex/_generated"],
  parser: "@typescript-eslint/parser",
};
