const chalk = require("chalk");
const content = require("../data/data");
const console = require("console");

const contactMe = () => {
  console.log(chalk.yellow(content.contactme));
  console.log(chalk.yellow("\n================================\n"));
};

module.exports = contactMe;
