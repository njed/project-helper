import { FeatureTypes } from '../constants';
import { FeatureConfig } from '../../typings';

const config: FeatureConfig[] = [
  {
    name: FeatureTypes.eslint,
    filename: '.eslintrc.js',
    dependencies: [
      'eslint',
      '@typescript-eslint/parser',
      '@typescript-eslint/eslint-plugin',
      'eslint-config-prettier',
      'eslint-plugin-prettier',
    ],
    scripts: [
      { name: 'eslint', value: 'eslint --fix src --ext .ts --max-warnings=0' },
    ],
    content: `
module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
  }
};
  `,
  },
  {
    name: FeatureTypes.eslint,
    filename: '.eslintignore',
    dependencies: [],
    scripts: [],
    content: `
/node_modules
/lib
/dist
.DS_Store
  `,
  },
];
export default config;
