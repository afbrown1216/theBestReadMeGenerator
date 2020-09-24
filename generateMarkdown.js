// function to generate markdown for README
function generateMarkdown(data) {
    let licenseText = "";
    if (data.license === "MIT"){
        licenseText = "This application is licensed under the MIT License . . .";
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
  