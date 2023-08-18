// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// An array of questions for user input
const questions = [
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
    choices: [
      "1. MIT License",
      "2. GNU License",
      "3. GPLv2 License",
      "4. Apache",
      "5. Other",
    ],
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
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
];

// Function to write README file
const writeToFile = (fileName, data) => {
  fs.writeFileSync(fileName, data, (err) => console.error("Error: ", err));
}

// Initializing app 
const init = () => {
  inquirer
    .prompt(questions)
    // Take the responses from the questions and create readme
    .then((responses) => {
      const markdown = generateMarkdown(responses);
      writeToFile("README.md", markdown);
      console.log("README.md created successfully!");
    })
    .catch((err) => {
      console.error("Error: ", err);
    });
}

// Function call to initialize app
init();
