const { program } = require('commander');
import commands from './commands';

program
  .name('ts-cli')
  .version(`${require('../package.json').version}`)
  .usage('<command> [options]');

commands.forEach(({ name, description, action }) => {
  program.command(name).description(description).action(action);
});

program.parse(process.argv);
