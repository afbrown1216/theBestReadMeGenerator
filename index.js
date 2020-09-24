const fs = require ("fs");
const inquirer = require("inquirer");
const generate = require("./generateMarkdown")


inquirer
.prompt([
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


])
.then(function (data){
    // console.log(response)
    fs.writeFile("genReadMe.md", generate(data), (err) => {
        if (err)throw err;
        console.log('File created');
    })
})
.catch(err => {
    console.log(err);
});


// function generate (data){
//     console.log(data);
//     return `
    
// # ${data.title}

// ## Description

// ${data.description}

// ## Installation

// ${data.installation}

// ## Usage

// ${data.usage}

// ## Contributing

// Here are some guidelines for anyone who would like to contribute to this application.

// ${data.contributing}

// ## Tests

// ${data.tests}

// ## Questions

// If you have any questions please contact me here: 

// GitHub: ${data.username}
// Email: ${data.email}

// ## License 

// Copyright (c) ${data.username}. 
// Licensed under the ${data.license} license.


  
//   `
// }