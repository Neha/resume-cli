const chalk = require("chalk");
const Welcome = require("./Welcome-message");
const index = require("./commands/index");
const console = require("console");

/* init method */
const Main = () => {
  Welcome();
  console.log(chalk.red("Welcome to My Resume!!"));
  index();
};

Main();
