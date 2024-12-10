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
      const options = initOptionsSchema.parse(opts);

      p.intro(highlight(' CLI Template: init '));

      const prompts = {
        ...(!options.name && {
          name: () =>
            p.text({
              message: 'What is the name of your project?',
              placeholder: 'my-project',
            }),
        }),
      };

      const prompt = await p.group(prompts, {
        onCancel: () => {
          p.cancel('Operation cancelled');
          process.exit(1);
        },
      });

      const name = options.name ?? prompt.name ?? 'my-project';

      p.outro(highlight(` Your project is named ${emphasize(name)} `));
    } catch (error) {
      handleError(error);
    }
  });
