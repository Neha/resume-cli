const inquirer = require("inquirer");
const response = require("./response");
const console = require("console");

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
          "Summary",
          "Micro"
        ]
      }
    ])
    .then((answers) => {
      response(answers.option);
    });
};

module.exports = Index;
