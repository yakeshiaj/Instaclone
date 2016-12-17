module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "ecmaFeatures": {
    "jsx": false,
    "modules": true
  },
  "installedESLint": true,
  "plugins": [
    "babel",
    // "react",
    "jsx-a11y",
    "import",
    "flowtype"
  ],
  "rules": {
    "comma-dangle": 0,
    "object-curly-spacing": 0,
    "jsx-space-before-closing": 0,
    "react/prop-types": 0,
    'react/jsx-space-before-closing': 0,
    "import/no-extraneous-dependencies": ["error", {
      "devDependencies": true,
      "optionalDependencies": false,
      "peerDependencies": true
    }]
  }
};
