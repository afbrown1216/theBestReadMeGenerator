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
