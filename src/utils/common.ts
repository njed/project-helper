import { existsSync, readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';
const clear = require('clear-console');

export interface IPackageJSON {
  name: string;
  version: string;
  description: string;
  scripts: {
    [key: string]: string;
  };
}

export interface IJSON {
  [key: string]: unknown;
}

export type Context = {
  projectName: string; // Project name
  workspaces: boolean; // Whether to enable the workspace
};

export function isExists(name: string) {
  const path = getProjectPath(name);
  return existsSync(path);
}

export function readJsonFile<T>(filename: string): T {
  return JSON.parse(readFileSync(filename, { encoding: 'utf-8', flag: 'r' }));
}

export function writeJsonFile<T>(filename: string, content: T): void {
  writeFileSync(filename, JSON.stringify(content, null, 2));
}

export function getProjectPath(name: string): string {
  return resolve(process.cwd(), name);
}

export function printMsg(msg: string): void {
  console.log(msg);
}

export function clearConsole(): void {
  clear();
}
