import { FeatureTypes } from '../constants';
import { FeatureConfig } from '../../typings';

const config: FeatureConfig = {
  name: FeatureTypes.changelog,
  dependencies: ['cz-conventional-changelog', 'conventional-changelog-cli'],
  scripts: [
    { name: 'commit', value: 'cz' },
    {
      name: 'version',
      value:
        'conventional-changelog -p angular -i CHANGELOG.md -s && git add CHANGELOG.md',
    },
  ],
};

export default config;
