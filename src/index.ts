#!/usr/bin/env node
import { Command } from "commander";
import packageJson from "../package.json";
import { init } from "~/commands/init";

const main = () => {
  const program = new Command();

  program
    .name(packageJson.name)
    .description(packageJson.description)
    .version(
      packageJson.version,
      "-v, --version",
      "Display the version number",
    );

  program.addCommand(init);

  program.parse();
};

main();
