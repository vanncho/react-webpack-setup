module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    JSX: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
    createDefaultProgram: true,
  },
  plugins: [],
  rules: {
    'max-len': [2, { 'code': 160, 'ignoreUrls': true }],
    'import/prefer-default-export': 'off',
    // This rule allows you to enforce conventions for any identifier, using granular selectors to create a fine-grained style guide.
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: ['variable'],
        format: ['camelCase', 'strictCamelCase', 'PascalCase', 'StrictPascalCase', 'snake_case', 'UPPER_CASE'],
      }
    ],
    // Enforces that there is no spreading for any JSX attribute
    'react/jsx-props-no-spreading': 'off',
    // Enforce a defaultProps definition for every prop that is not a required prop
    'react/require-default-props': 'off',
    'no-console': 'off',
    // Disallow trailing whitespace at the end of lines
    'no-trailing-spaces': [
      'warn',
      { 'skipBlankLines': true }, // allows or disallows trailing whitespace on empty lines
      // {'ignoreComments': false} // (default) disallows trailing whitespace in comment blocks
    ],
    // Require explicit return and argument types on exported functions' and classes' public class methods
    'no-untyped-public-signature': 'off',
    // Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean.
    '@typescript-eslint/no-inferrable-types': 1,
    // Require explicit return and argument types on exported functions' and classes' public class methods
    '@typescript-eslint/explicit-module-boundary-types': ['error'],
    'react/jsx-boolean-value': 'off',
    'react/jsx-curly-brace-presence': 'off',
  },
};
