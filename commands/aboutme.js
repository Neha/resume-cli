const chalk = require("chalk");
const content = require("../data/data");
const console = require("console");

const aboutMe = () => {
  console.log(chalk.yellow(content.aboutme));
  console.log(chalk.yellow("\n================================\n"));
};

module.exports = aboutMe;
