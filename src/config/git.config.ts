import { FeatureTypes } from '../constants';
import { FeatureConfig } from '../../typings';

const config: FeatureConfig[] = [
  {
    name: FeatureTypes.git,
    filename: '.gitignore',
    dependencies: [],
    scripts: [],
    content: `
  .DS_Store
  node_modules/
  test/unit/coverage
  .idea/
  .vscode/
  .vscode
  **/typings.json
  **/typings
  .eslintcache
    `,
  },
  {
    name: FeatureTypes.git,
    filename: '.gitattributes',
    dependencies: [],
    scripts: [],
    content: `
*.ts linguist-detectable=true
*.css linguist-detectable=false
*.scss linguist-detectable=false
*.js linguist-detectable=false
*.vue linguist-detectable=false
`,
  },
];
export default config;
