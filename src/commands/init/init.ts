import * as p from '@clack/prompts';
import { Command } from 'commander';

import { emphasize } from '~/helpers/emphasize';
import { handleError } from '~/helpers/handle-error';
import { highlight } from '~/helpers/highlight';
import { initOptionsSchema } from './schema.js';

export const init = new Command()
  .name('init')
  .description('Initialize a new project')
  .option('-n, --name <name>', 'Name of the project')
  .action(async (opts) => {
    try {
      let { name } = initOptionsSchema.parse(opts);

      p.intro(highlight(' CLI Template: init '));

      if (!name) {
        const prompt = await p.group(
          {
            name: () => p.text({ message: 'What is your project name?' }),
          },
          {
            onCancel: () => {
              p.cancel('Operation cancelled');
              process.exit(1);
            },
          },
        );

        name = prompt.name;
      }

      p.outro(highlight(` Your project is named ${emphasize(name)} `));
    } catch (error) {
      handleError(error);
    }
  });
