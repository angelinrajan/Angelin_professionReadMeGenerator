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
 if (license !== 'None') {
  let validatedLicense = ''
  for (i=0; i<license.length-1; i++) {
if (license[i] === ' ') {
  validatedLicense += '%20'
} else {
  validatedLicense += license[i]
}

  }

  return `![GithubLicense](https://img.shields.io/badge/license-${license}-blue.svg)`
 }
 return ''; // Return an empty string if there's an error
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
 // const licenseBadge = renderLicenseBadge(data.license);

  return `
# ${data.heading}

## ${renderLicenseBadge(data.license)}
## ${data.description}
`;
}

module.exports = generateMarkdown;
