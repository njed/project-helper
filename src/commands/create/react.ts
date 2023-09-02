const shell = require('shelljs');
import { FeatureKeys, ProjectTypes } from '../../constants';
import { CreateContext } from '../../../typings';
import { Middleware } from '../../utils/middleware';

export default function (ctx: CreateContext, next?: Middleware<CreateContext>) {
  if (ctx.answers[FeatureKeys.project] === ProjectTypes.react) {
    // if (!shell.which('create-react-app')) {
    //   shell.echo('Install create-react-app first.');
    // }
    // shell.exec(`create-react-app ${ctx.appName}`);
    shell.echo('Run them "npx create-react-app my-app" command');
    return ctx;
  }
  return next ? next(ctx) : ctx;
}
