import { FeatureTypes } from '../constants';
import { FeatureConfig } from '../../typings';

const config: FeatureConfig = {
  name: FeatureTypes.lintstaged,
  filename: '.lintstagedrc.js',
  dependencies: ['lint-staged', 'husky'],
  scripts: [{ name: 'lint:staged', value: 'npx lint-staged' }],
  content: `
module.exports = {
  '*.ts': ['prettier --write', 'eslint --fix', 'git add'],
};
  `,
};
export default config;
