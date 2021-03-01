module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    // 'prefer-object-spread': 'off',
    // 'prefer-const': 'off',
    'no-console': 'off',
    // 'no-new': 'off',
    // 'dot-notation': 'off',
    // 'consistent-return': 'off',
    // 'no-else-return': 'off',
    // 'no-lonely-if': 'off',
    // 'no-restricted-syntax': 'off',
    // 'no-plusplus': 'off',
    // radix: 'off',
    // 'class-methods-use-this': 'off',
    // 'no-param-reassign': 'off',
    // camelcase: 'off',
    // 'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
    // 'import/first': 'off',
    // 'import/prefer-default-export': 'off',
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
