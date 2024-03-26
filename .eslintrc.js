module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "airbnb",
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx"] }],
    quotes: ["error", "double"],
    "react/function-component-definition": "off",
    "react/prop-types": "off",
    "operator-linebreak": "off",
    "react/jsx-one-expression-per-line": "off",
    "no-nested-ternary": "off",
    "react/jsx-props-no-spreading": "off",
    "object-curly-newline": "off",
  },
};
