// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown"); 
// TODO: Create an array of questions for user input
//   title, Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
const questions = [
  {
    type: "input",
    message: "What is your project title?",
    name: "title",
  },
  {
    type: "input",
    message:
      "Provide a short description explaining the what, why, and how of your project.",
    name: "description",
  },
  {
    type: "input",
    message:
      "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
    name: "installationInstructions",
  },
  {
    type: "input",
    message: "Provide instructions and examples for use.",
    name: "usageInformation",
  },
  {
    type: "input",
    message:
      "List your collaborators, if any, with links to their GitHub profiles.",
    name: "credits",
  },
  {
    type: "list",
    message: "What license do you want to use?",
    name: "license",
    choices: ["MIT", "ISC", "GNU"],
  },
  {
    type: "input",
    message:
      "If you've written any test, provide examples and how to use them. ",
    name: "tests",
  },
  {
    type: "input",
    message: "What is your Github username?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your email address? ",
    name: "email",
  },
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  inquirer.prompt(questions).then((data) => {
    console.log(data);
    const filename = "README.md";
    fs.writeFile(filename, generateMarkdown(data), (err) =>
      err ? console.error(err) : console.log("README.md successfully created!")
    );
  });
}
writeToFile();
