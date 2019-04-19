const inquirer = require("inquirer");
const response = require("./response");
const console = require("console");
const chalk = require("chalk");

const Index = () => {
  console.log("Please select the options from the below:");
  inquirer
    .prompt([
      {
        type: "list",
        name: "option",
        message: "Pick any options",
        choices: [
          "About me",
          "Experience",
          "Tech stack",
          "Contact me",
          "Summary"
        ]
      }
    ])
    .then((answers) => {
      response(answers.option);

      inquirer
        .prompt({
          type: "list",
          name: "option",
          message: "You can go back or Exit?",
          choices: ["Back", "Exit"]
        })
        .then((choice) => {
          if (choice.option == "Back") {
            Index();
          } else {
            console.log(chalk.red("\nSee you soon!!"));
            return;
          }
        });
    });
};

module.exports = Index;
