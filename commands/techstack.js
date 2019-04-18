const chalk = require("chalk");
const content = require("../data/data");
const console = require("console");

const TechStack = () => {
  console.log(chalk.yellow(content.techstack));
  // index();
};

module.exports = TechStack;
