import install from '../../utils/install';
import { FeatureKeys, ProjectTypes } from '../../constants';
import { CreateContext } from '../../../typings';
import { Middleware } from '../../utils/middleware';
const shell = require('shelljs');

/**
 * Create a js project
 * @param {string} projectName Project name
 */
export default function (ctx: CreateContext, next?: Middleware<CreateContext>) {
  if (ctx.answers[FeatureKeys.project] === ProjectTypes.javascript) {
    // 创建目录
    shell.exec(`mkdir ${ctx.appName}`);
    shell.cd(`${ctx.appName}`);
    shell.exec('mkdir src && && cd src && touch index.ts');
    shell.exec('npm init -y', {});
    install();
    return ctx;
  }
  return next ? next(ctx) : ctx;
}
