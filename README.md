# CLI Template

Template for a CLI using TypeScript.
This CLI has only one command: `init`. It prompts the user for a project name and then prints a message with the name.

## Stack

- [Clack](https://github.com/bombshell-dev/clack) - CLI Prompts
- [Commander](https://github.com/tj/commander.js) - CLI Framework
- [picocolors](https://github.com/alexeyraspopov/picocolors) - Colors for the Terminal
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with Syntax
- [ESLint](https://eslint.org/) - Linting
- [Prettier](https://prettier.io/) - Formatting
- [Zod](https://github.com/colinhacks/zod) - Validation
- [tsx](https://github.com/privatenumber/tsx) - TypeScript runner

## Getting Started

1. Run `pnpm i` to install dependencies.
2. Run `pnpm dev` to execute the CLI (using `tsx`).

## Package Scripts

- `build` - Builds the CLI using `tsup`.
- `build:silent` - Builds the CLI using `tsup` without showing the output.
- `start` - Starts the CLI using `node`.
- `dev` - Runs the CLI using `tsx`.
- `dev:node` - Runs the CLI using `node`. Builds the CLI using `build:silent` and executes it using `start`.
- `format` - Checks the code using `prettier`.
- `format:fix` - Formats the code using `prettier`.
- `lint` - Checks the code using `eslint`.
- `lint:fix` - Fixes the code using `eslint`.
- `pub:beta` - Builds the CLI using `build` and publishes it to the `beta` tag.
- `pub:next` - Builds the CLI using `build` and publishes it to the `next` tag.
- `pub:release` - Builds the CLI using `build` and publishes it to the `latest` tag.
- `typecheck` - Checks the code using `tsc`.
