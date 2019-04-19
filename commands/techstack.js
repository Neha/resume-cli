const chalk = require("chalk");
const content = require("../data/data");
const console = require("console");

const TechStack = () => {
  console.log(chalk.yellow(content.techstack));
  console.log(chalk.yellow("\n================================\n"));
};

module.exports = TechStack;
