import { FeatureTypes } from '../constants';
import { FeatureConfig } from '../../typings';

const config: FeatureConfig = {
  name: FeatureTypes.lerna,
  filename: 'lerna.json',
  dependencies: ['lerna'],
  scripts: [],
  content: `
{
  "packages": [
    "packages/*"
  ],
  "version": "independent",
  "npmClient": "yarn",
  "useWorkspaces": true
}
  `,
};
export default config;
