import { Answers } from 'inquirer';
const inquirer = require('inquirer');
import {
  FeatureKeys,
  ManageTypes,
  ProjectTypes,
  PresetTypes,
  FeatureTypes,
  BuildTypes,
  MonorepoTypes,
} from '../constants';

function _map(obj: Record<string, string>) {
  return Object.keys(obj).map((key) => {
    return { name: key, value: obj[key] };
  });
}

const features = [
  {
    name: FeatureKeys.project,
    type: 'list',
    message: 'Please pick a project type:',
    choices: _map(ProjectTypes),
  },
  {
    name: FeatureKeys.preset,
    type: 'list',
    message: 'Please pick a preset:',
    choices: _map(PresetTypes),
    when(answers: Answers) {
      return [ProjectTypes.javascript, ProjectTypes.typescript].includes(
        answers.project,
      );
    },
  },
  {
    name: FeatureKeys.manually,
    type: 'checkbox',
    message: 'Check the features:',
    choices: _map(FeatureTypes),
    when(answers: Answers) {
      return answers[FeatureKeys.preset] === PresetTypes.manaually;
    },
  },
  {
    name: FeatureKeys.build,
    type: 'confirm',
    message: 'Whether to use a build tool?',
    default: false,
    when(answers: Answers) {
      return !!answers[PresetTypes.manaually];
    },
  },
  {
    name: FeatureKeys.buildTool,
    type: 'list',
    message: 'Please pick a build tool:',
    choices: _map(BuildTypes),
    when(answers: Answers) {
      return !!answers[FeatureKeys.build];
    },
  },
  {
    name: FeatureKeys.monorepo,
    type: 'confirm',
    message: 'Whether to use Monorepo?',
    default: false,
    when(answers: Answers) {
      return !!answers[FeatureKeys.manually];
    },
  },
  {
    name: FeatureKeys.monorepoTool,
    type: 'list',
    message: 'Please pick a monorepo manage tool:',
    choices: _map(MonorepoTypes),
    when(answers: Answers) {
      return !!answers[FeatureKeys.monorepo];
    },
  },
  {
    name: FeatureKeys.manageTool,
    type: 'list',
    message: 'Please pick a manage tool:',
    choices: _map(ManageTypes),
    when(answers: Answers) {
      return answers[FeatureKeys.preset] === PresetTypes.manaually;
    },
  },
];

export default function selectFeatures() {
  return inquirer.prompt(features);
}
