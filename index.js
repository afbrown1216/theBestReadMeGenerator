const fs = require ("fs");
const inquirer = require("inquirer");


inquirer
.prompt([
    { 
        type: "input", 
        message: "What is the name of the project? ",
        name: "title"

    }
])
.then(function (response){
    console.log(response)
})
.catch(err => {
    console.log(err);
});
