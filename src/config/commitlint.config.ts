import { FeatureTypes } from '../constants';
import { FeatureConfig } from '../../typings';

const config: FeatureConfig = {
  name: FeatureTypes.cz,
  filename: 'commitlint.config.js',
  dependencies: ['@commitlint/cli', '@commitlint/config-conventional'],
  scripts: [
    { name: 'cz', value: 'cz' },
    { name: 'commitlint', value: 'commitlint --edit' },
  ],
  content: `
module.exports = {
  extends: ['@commitlint/config-conventional']
};
  `,
  // exec: 'npx commitizen init cz-conventional-changelog --save --save-exact'
};

export default config;
