// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// An array of questions for user input
const questions = inquirer
  .prompt([
    {
      type: "input",
      message: "What is the name of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "What is a description of your project?",
      name: "description",
    },
    {
      type: "input",
      message: "How do you install this project?",
      name: "installation",
    },
    {
      type: "input",
      message: "What is this project used for?",
      name: "usage",
    },
    {
      type: "list",
      message: "Which license are you using?",
      name: "license",
      choices: ["1. MIT License", "2. GNU License"],
    },
    {
      type: "input",
      message: "Who contributed to this project?",
      name: "contributing",
    },
    {
      type: "input",
      message: "Is this project a test?",
      name: "tests",
    },
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "github",
    },
  ])
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.error("Error: ", err);
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile("README.md", data, (err) => console.log(err));
}

// TODO: Create a function to initialize app
function init() {
  // questions();
  // writeToFile();
}

// Function call to initialize app
init();
