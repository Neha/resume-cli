const chalk = require("chalk");
const content = require("../data/data");
const console = require("console");

const experience = () => {
  console.log(chalk.yellow(content.experience));
};

module.exports = experience;
