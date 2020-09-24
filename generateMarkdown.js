// function to generate markdown for README
function generateMarkdown(data) {
    let licenseText = "";
    if (data.license === "MIT"){
        licenseText = "This application is licensed under the MIT License . . .";
    }
    return `
    
    # ${data.title}

  
  `;
  }
  
  module.exports = generateMarkdown;
  