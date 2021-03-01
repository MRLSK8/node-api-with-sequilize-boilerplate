module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'import',
  ],
  globals: {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'prefer-object-spread': 'off',
    'prefer-const': 'off',
    'no-console': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    // 'no-new': 'off',
    // 'dot-notation': 'off',
    // 'consistent-return': 'off',
    // 'no-else-return': 'off',
    // 'no-lonely-if': 'off',
    // 'no-restricted-syntax': 'off',
    // 'no-plusplus': 'off',
    // radix: 'off',
    'class-methods-use-this': 'off',
    // 'no-param-reassign': 'off',
    // camelcase: 'off',
    'no-unused-vars': 'off',
    'import/first': 'off',
    'import/prefer-default-export': 'off',
    'lines-between-class-members': 'off',
    // 'import/no-cycle': 'off',
    // 'prefer-destructuring': 'off',
    // 'no-nested-ternary': 'off',
    // 'prettier/prettier': [
    //   'error',
    //   {
    //     endOfLine: 'auto',
    //   },
    // ],
  },
};
