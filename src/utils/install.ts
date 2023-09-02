const fs = require('fs');
const shell = require('shelljs');
import { IPackageJSON, printMsg, readJsonFile, writeJsonFile } from './common';
import features from '../config';
import { FeatureConfig, FeatureConfigScript } from '../../typings';

export default function install(): void {
  try {
    const packageJson = readJsonFile<IPackageJSON>('./package.json');
    const deps: string[] = [];
    features.forEach((item: FeatureConfig) => {
      const { filename, dependencies, scripts, content } = item;
      if (filename && content) {
        fs.writeFileSync(`./${filename}`, content, { encoding: 'utf-8' });
      }
      if (scripts && scripts.length) {
        scripts.forEach((script: FeatureConfigScript) => {
          packageJson.scripts[script.name] = script.value;
        });
      }
      deps.push(...dependencies);
    });
    writeJsonFile<IPackageJSON>('./package.json', packageJson);
    const str: string = deps.join(' ');
    shell.exec(`pnpm add ${str} -D`);
    shell.exec('git init && npx husky install');
    shell.exec('npx husky add .husky/pre-commit "pnpm run lint:staged"');
    shell.exec('npx husky add .husky/commit-msg  "pnpm run commitlint ${1}"');
  } catch (err) {
    printMsg('');
  }
}
