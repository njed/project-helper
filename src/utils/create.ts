// import { existsSync } from 'fs';
// import { prompt } from 'inquirer';
// import { blue } from 'chalk';
// import * as shell from 'shelljs';
// import {
//   clearConsole,
//   getProjectPath,
//   printMsg,

// } from '../utils/common';
// import * as install from './install';
const shell = require('shelljs');

export function initProjectDir(name: string): void {
  shell.exec(`mkdir ${name}`);
  shell.cd(name);
  shell.exec('npm init -y');
}

// export function changePackageInfo(projectName: string): void {

// }

// export function installHusky(features: string[]): void {
//   const hooks = {};
//   if (features.includes('CZ')) {
//     hooks['commit-msg'] = '';
//   }
//   const items: string[] = [];
//   if (features.includes('ESLint')) {
//     items.push('eslint');
//   }
//   if (features.includes('Prettier')) {
//     items.push('prettier');
//   }
//   install.installHusky(hooks, items);
// }

// export function end(projectName: string): void {
//   printMsg(`Successfully created project ${yellow(projectName)}`);
//   printMsg('Get started with the following commands:');
//   printMsg('');
//   printMsg(`${gray('$')} ${cyan('cd ' + projectName)}`);
//   printMsg(`${gray('$')} ${cyan('npm run dev')}`);
//   printMsg('');
// }
