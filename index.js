// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
inquirer.prompt([
  {
    //this is an input because I'm typing in a response
    type: "input",
    message: "What is your project title?",
    name: "Project title",
  },
  {
    type: "input",
    message: "Enter description",
    name: "Description",
  },
  {
    type: "list",
    message: "Choose license",
    name: "License",
    choices: ["REI", "blue", "MIT", "magenta"],
  },
  {
    type: "input",
    message: "Installation Instructions",
    name: "Installation Instructions",
  },
  {
    type: "input",
    message: "Usage information",
    name: "Usage Info",
  },
  //this is asynchronous so we use .then
]) .then(function(response){//I LEFT OFF ON THIS PART
    console.log(colors[response.color](`Your favorite color is ${response.color}!`))
  });


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

// inquirer
//   .prompt([
//     {
//       type: "list",
//       message: "What is your favorite color?",
//       name: "color",
//       choices: ["red", "blue", "green", "yellow", "cyan", "magenta"],
//     }
//   ])
//   .then((response) =>
//     console.log(colors[response.color](`Your favorite color is ${response.color}!`))
//   );
