const chalk = require("chalk");
const content = require("../data/data");
const console = require("console");

const experience = () => {
  console.log(chalk.yellow(content.experience));
  console.log(chalk.yellow("\n================================\n"));
};

module.exports = experience;
