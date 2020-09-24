// function to generate markdown for README
function generateMarkdown(data) {
    let licenseText = "";
    let licenseBadge;
    if (data.license === "MIT"){
        licenseText = "This application is licensed under the MIT License . . .";
        licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else if (data.license === "Apache"){
        licenseText = ""
        licenseBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    }else if (data.license === "GNU GPLv3"){
        licenseText;
        licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    }
    return `
    
    # ${data.title}

    ## Description

    ${data.description}

    ## Installation

    ${data.installation}

    ## Usage

    ${data.usage}

    ## Contributing

    Here are some guidelines for anyone who would like to contribute to this application.
    
    ${data.contributing}

    ## Tests

    ${data.tests}

    ## Questions

    If you have any questions please contact me here: 
    
    ${data.username}
    ${data.email}

    ## License 

    ${data.license}
   

  
  `;
  }
  
  module.exports = generateMarkdown;
  