const fs = require ("fs");
const inquirer = require("inquirer");


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
        name: "email address"
    }


])
.then(function (res){
    // console.log(response)
    const {title} = res
    fs.writeFile("genReadMe.md",`# ${title}`, (err) => {
        if (err)throw err;
        console.log('File created');
    })
})
.catch(err => {
    console.log(err);
});
