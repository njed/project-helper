import { Answers } from 'inquirer';

export declare type CreateContext = {
  appName: string;
  answers: Answers;
};

export declare type FeatureConfigScript = {
  name: string;
  value: string;
};

export declare type FeatureConfig = {
  name: string;
  filename?: string;
  scripts: FeatureConfigScript[];
  dependencies: string[];
  content?: string;
};
