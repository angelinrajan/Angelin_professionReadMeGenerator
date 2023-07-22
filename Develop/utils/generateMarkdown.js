// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string


//const axios = require('axios');

function renderLicenseBadge(license) {
 // const badge = await axios.get(`https://img.shields.io/badge/license-${license}-blue.svg`);
  //return badge.data
  /*
  try {
    const badge = await axios.get(`https://img.shields.io/badge/license-${license}-blue.svg`);
    return badge.data;
  } catch (error) {
    console.error('Failed to fetch license badge:', error);
    return ''; // Return an empty string if there's an error
  }
  */
 //if statement to remove the space between the license words.
 //without the removal of space, badge does not display.
 if (license !== 'None') {
  let validatedLicense = ''
  for (i=0; i<license.length; i++) {
if (license[i] === ' ') {
  validatedLicense += '%20'
} else if (license[i] === '-') {
  validatedLicense += '--'
} 
else {
  validatedLicense += license[i]
}

  }

  return `## ![GithubLicense](https://img.shields.io/badge/license-${validatedLicense}-darkblue.svg)`
 }
 return ''; // Return an empty string if there's an error
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'GNU Affero General Public License v3.0') {
    return 'https://choosealicense.com/licenses/agpl-3.0/'
  }
  if (license === 'GNU General Public License v3.0') {
    return 'https://choosealicense.com/licenses/gpl-3.0/'
  }
  if (license === 'Mozilla Public License 2.0') {
    return 'https://choosealicense.com/licenses/mpl-2.0/'
  }
  if (license === 'Apache License 2.0') {
    return 'https://choosealicense.com/licenses/apache-2.0/'
  }
  if (license === 'MIT License') {
    return 'https://choosealicense.com/licenses/mit/'
  }
  if (license === 'Boost Software License 1.0') {
    return 'https://choosealicense.com/licenses/bsl-1.0/'
  }
  return '';
 }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return ''
  }

  return '## License'
 }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.heading}

${renderLicenseBadge(data.license)}

## Description 
${data.description}

##  Table of Contents: 📜
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contributing)
* [License](#license)
* [Test](#tests)
* [Question](#question)

## Installation 
Below are the installation instructions to install dependencies--   
${data.installation}

## Usage
Instructions for use:   
${data.usage}

${renderLicenseSection(data.license)}
Below is the link for more information regarding the license used in this application:   
${renderLicenseLink(data.license)}

## Contributing 🖧
Below are the contribution guidelines--   
${data.contributing}

## Tests
Below are the test instructions--   
${data.tests}

## Questions
For further questions:

If you have any questions, or additional feedback, please feel free to email me and I will respond as soon as possible.
:handshake:

**Contact Info:**  
+ **GitHub username is:** ${data.githubUsername}   
+ 📧 **Email:** ${data.email}
`;
}

module.exports = generateMarkdown;
