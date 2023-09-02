import { FeatureConfig } from '../../typings';

const config: FeatureConfig = {
  name: 'build',
  dependencies: [],
  scripts: [
    { name: 'build:comment', value: '构建' },
    { name: 'build', value: 'rm -rf lib && tsc --build' },
  ],
};

export default config;
