import git from './git.config';
import editor from './editor.config';
import eslint from './eslint.config';
import prettier from './prettier.config';
import lintstaged from './lintstaged.config';
import commitlint from './commitlint.config';
import changelog from './changelog.config';
import { FeatureConfig } from '../../typings';
import jest from './jest.config';
import lerna from './lerna.config';

const config: FeatureConfig[] = [
  ...git,
  editor,
  ...eslint,
  prettier,
  lintstaged,
  commitlint,
  changelog,
  jest,
  lerna,
];

export default config;
