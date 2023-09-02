import { FeatureTypes } from '../constants';
import { FeatureConfig } from '../../typings';

const config: FeatureConfig = {
  name: FeatureTypes.jest,
  filename: 'jest.config.js',
  dependencies: ['jest', 'ts-jest', '@types/jest'],
  scripts: [
    { name: 'test', value: 'jest' },
    { name: 'test-c', value: 'jest --coverage' },
  ],
  content: `
module.exports = {
  roots: ['<rootDir>/src/__tests__'],
  testRegex: '__tests__/(.+)\\.test\\.[jt]sx?$',
  transform: {
    '\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: [
    'js',
    'mjs',
    'cjs',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node',
  ],
};
  `,
};
export default config;
