const inquirer = require("inquirer");
const fs = require("fs");
const generate = require("./generateMarkdown");

// array of questions for user
const questions = [
    { 
        type: "input", 
        message: "What is the name of the project? ",
        name: "title"

    },
    {
        type:"input",
        message: "Description of this project",
        name: "description"
    },
    {
        type: "input",
        message: "What are the steps to install your project?",
        name: "installation"
    },
    {
        type: "input",
        message: "Usage",
        name: "usage"
    },
    {
        type: "list",
        choices:["Apache", "MIT", "GNU GPLv3", "none" ],
        message: "What license would you like to use for this project?",
        name: "license"
    },
    {
        type: "input",
        message: "What are your guidelines for contributors? ",
        name: "contributing"
    },
    {
        type:"input", 
        message: "Did you write tests for your application? If so provide examples.",
        name: "tests"
    },
    {
        type: "input",
        message: "GitHub username",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    }

];

// function to write README file
function writeToFile(fileName, data) {
    console.log(fileName, data);
    fs.writeFile(fileName,generate(data), (err) => {
        if (err) throw err;
        console.log('File created');
    })
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then( function (data) {
        console.log(data);
        writeToFile("README.md", data);
    }).catch (err => {
        console.log(err);
    })
    
}

// function call to initialize program
init();


