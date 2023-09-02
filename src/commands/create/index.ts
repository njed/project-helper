import { isExists, printMsg } from '../../utils/common';
import selectFeatures from '../../utils/features';
import createVue from './vue';
import createReact from './react';
import createJs from './javascript';
import Middleware from '../../utils/middleware';
import { CreateContext } from '../../../typings';

const create = new Middleware<CreateContext>();
create.use(createVue);
create.use(createReact);
create.use(createJs);

export async function createApp(appName: string) {
  if (isExists(appName)) {
    printMsg(`${appName}已存在`);
    process.exit(0);
  }
  const answers = await selectFeatures();
  create.run({
    appName,
    answers,
  });
}

const command = {
  name: 'create <app-name>',
  description: 'Create a project named <app-name> in the current directory',
  action: createApp,
};

export default command;
