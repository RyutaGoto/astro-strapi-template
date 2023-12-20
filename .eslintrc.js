module.exports = {
  extends: ["plugin:astro/recommended", "prettier", "react-app"],
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      processor: "astro/client-side-ts",
      rules: {
        "astro/no-set-text-directive": "error",
      },
    },
  ],
};
