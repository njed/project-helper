export const ProjectTypes = {
  vue: 'vue',
  react: 'react',
  javascript: 'javascript',
  typescript: 'typescript',
};

export const PresetTypes = {
  default: 'default',
  manaually: 'manaually',
};

export const FeatureTypes = {
  git: 'git',
  editor: 'editor',
  eslint: 'eslint',
  prettier: 'prettier',
  husky: 'husky',
  cz: 'cz',
  lintstaged: 'lintstaged',
  changelog: 'changelog',
  jest: 'jest',
  babel: 'babel',
  lerna: 'lerna',
};

export const BuildTypes = {
  webpack: 'webpack',
  rollup: 'rollup',
};

export const MonorepoTypes = {
  lerna: 'lerna',
  pnpm: 'pnpm',
};

export const ManageTypes = {
  pnpm: 'pnpm',
  yarn: 'yarn',
  npm: 'npm',
};

export const FeatureKeys = {
  project: 'project',
  preset: 'preset',
  manually: 'manually',
  build: 'build',
  buildTool: 'buildTool',
  monorepo: 'monorepo',
  monorepoTool: 'monorepoTool',
  manageTool: 'manageTool',
};

export default {
  FeatureKeys,
  ProjectTypes,
  PresetTypes,
  FeatureTypes,
  BuildTypes,
  MonorepoTypes,
  ManageTypes,
};
