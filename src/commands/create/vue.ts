const shell = require('shelljs');
import { FeatureKeys, ProjectTypes } from '../../constants';
import { CreateContext } from '../../../typings';
import { Middleware } from '../../utils/middleware';
export default function (ctx: CreateContext, next?: Middleware<CreateContext>) {
  if (ctx.answers[FeatureKeys.project] === ProjectTypes.vue) {
    // if (!shell.which('vue')) {
    //   shell.echo('Install the "@vue/cli" scaffolding first and then run the "vue create <app-name>" command');
    // }
    // shell.exec(`vue create ${ctx.appName}`)
    shell.echo(
      'Install the "@vue/cli" scaffolding first and then run the "vue create <app-name>" command',
    );
    return ctx;
  }
  return next ? next(ctx) : ctx;
}
