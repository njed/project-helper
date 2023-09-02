module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    // 'prettier',
    'plugin:prettier/recommended',
    // 'prettier/@typescript-eslint'
  ],
  // globals: {
  //   Atomics: 'readonly',
  //   SharedArrayBuffer: 'readonly',
  // },
  // overrides: [
  //   {
  //     env: {
  //       node: true
  //     },
  //     files: [
  //       '.eslintrc.{js,cjs}'
  //     ],
  //     parserOptions: {
  //       sourceType: 'script'
  //     }
  //   }
  // ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    '@typescript-eslint/no-var-requires': 0,
  },
};
