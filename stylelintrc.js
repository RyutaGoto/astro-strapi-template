module.exports = {
  extends: ["stylelint-config-standard-scss", "stylelint-config-recess-order"],
  plugins: ["stylelint-order"],
  ignoreFiles: ["node_modules/**/*.scss", "src/**/*.astro"],
  rules: {
    "string-quotes": "double",
    "no-descending-specificity": null,
    "no-duplicate-selectors": null,
  },
};
