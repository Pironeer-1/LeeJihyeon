module.exports = {
    extends: [
      "react-app",
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended",
      'prettier'
    ],
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/no-unescaped-entities': 'off',
      'no-unused-vars': 'off',
    },
  };
