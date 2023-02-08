
// TODO: Create a function to generate markdown for README
// used professional Github guide on github for the structure of the ReadME
function generateMarkdown(data) {
  return `# ${data.title}
![Github license](https://img.shields.io/static/v1?label=License&message=${data.license}&color=brightgreen)

## Description 
${data.description}

  
## Table of Contents
    
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)
  
## Installation
${data.installationInstructions}
  
  
## Usage
${data.usageInformation}
   
  
## Credits
${data.credits}
  
  
## License
${data.license}


## Tests
${data.tests}

## Questions
Reach me at the links below with additional questions:
- Github: https://github.com/${data.github}
- Email: ${data.email}
`;
}

module.exports = generateMarkdown;
