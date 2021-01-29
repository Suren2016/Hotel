module.exports = {
  "extends": "airbnb",
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint",
    "react-hooks",
    "detox",
    "import",
    "jsx-a11y"
  ],
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [
          ".js",
          ".jsx",
          ".ts",
          ".tsx"
        ]
      }
    }
  },
  "rules": {
    "no-debugger": "warn",
    "global-require": "off",
    "no-extra-boolean-cast": "off",
    "no-async-promise-executor": "off",
    "react/prefer-stateless-function": "off",
    "no-unused-expressions": "off",
    "react/state-in-constructor": "off",
    "react/require-default-props": "off",
    "max-len": "off",
    "react/no-unused-prop-types": "off",
    "no-use-before-define": "off",
    "react/no-array-index-key": "off",
    "react/jsx-curly-newline": "off",
    "react/static-property-placement": "off",
    "object-curly-newline": "off",
    "react/destructuring-assignment": "off",
    "react/default-props-match-prop-types": "off",
    "react/jsx-filename-extension": [
      "warn",
      {
        "extensions": [
          ".js",
          ".jsx",
          ".ts",
          ".tsx"
        ]
      }
    ],
    "react/prop-types": "off",
    "react/jsx-props-no-spreading": "off",
    "import/extensions": "off",
    "import/prefer-default-export": "off",
    "camelcase": "off",
    "consistent-return": "off",
    "no-nested-ternary": "off",
    "no-underscore-dangle": "off",
    "no-unused-vars": "off",
    "no-empty": "off",
    "no-plusplus": "off",
    "no-console": "off",
    "array-callback-return": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "import/no-unresolved": "error",
    "no-labels": "off",
    "guard-for-in": "off",
    "no-shadow": "off",
    "prefer-destructuring": "off",
    "no-await-in-loop": "off",
    "no-continue": "off",
    "no-restricted-syntax": "off",
    "no-return-await": "off",
    "no-param-reassign": "error"
  },
  "globals": {
    "__DEV__": true,
    "window": true,
    "browser": true,
    "it": true,
    "expect": true,
    "fetch": true
  }
};
