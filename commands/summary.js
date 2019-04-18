const chalk = require("chalk");
const content = require("../data/data");
const console = require("console");

const summary = () => {
  console.log(chalk.yellow(content.summary));
};

module.exports = summary;
