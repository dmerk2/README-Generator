// Function that returns a license badge based on which license is passed in and if there is no license, return an empty string
const renderLicenseBadge = (license) => {
  switch (license) {
    case "MIT License":
      return "https://img.shields.io/badge/License-MIT-yellow.svg";
    case "GNU License":
      return "https://img.shields.io/badge/License-GNU-blue.svg";
    case "GPLv2 License":
      return "https://img.shields.io/badge/License-GPLv2-blue.svg";
    case "Apache 2.0":
      return "https://img.shields.io/badge/License-Apache%202.0-blue.svg";
    default:
      return "";
  }
};

// Function that returns the license link and if no license, returns an empty string
const renderLicenseLink = (license) => {
  switch (license) {
    case "MIT License":
      return "https://opensource.org/licenses/MIT";
    case "GNU License":
      return "https://www.gnu.org/licenses/";
    case "GPLv2 License":
      return "https://www.gnu.org/licenses/gpl-2.0.html";
    case "Apache 2.0":
      return "https://opensource.org/licenses/Apache-2.0"
    default:
      return "";
  }
};

// Function to generate markdown for README
const generateMarkdown = (data) => {
  return `# ${data.title}

<div align="center">
  <img src="${renderLicenseBadge(data.license)}" width="100">
</div>

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description
\`\`\`
${data.description}
\`\`\`

## Installation
\`\`\`
${data.installation}
\`\`\`

## Usage
\`\`\`
${data.usage}
\`\`\`

## License
This project is licensed under the terms of the **[${
    data.license
  }](${renderLicenseLink(data.license)})**

## Contributing
\`\`\`
${data.contributing}
\`\`\`

## Tests
\`\`\`
${data.tests}
\`\`\`

## Questions
If you have any questions or suggestions about this project, please feel free to contact me:
- GitHub: [@${data.github}](https://github.com/${data.github})
- Email: ${data.email}
`;
};

module.exports = generateMarkdown;
