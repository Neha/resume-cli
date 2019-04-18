const chalk = require("chalk");
const content = require("../data/data");
const console = require("console");

const aboutMe = () => {
  console.log(chalk.yellow(content.aboutme));
};

module.exports = aboutMe;
