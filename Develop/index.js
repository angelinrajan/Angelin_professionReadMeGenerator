// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input

const questions = [ //(Starter code)
  {
    type: 'input',
    name: 'heading',
    message: 'What is your project title?',
  },
  {
    type: 'input',
    message: 'Project description?',
    name: 'description',
  },
  {
    type: 'list',
    message: 'License used?',
    name: 'license',
    choices: ['None', 'MIT License', 'Apache License 2.0', 'Boost Software License 1.0', 'GNU General Public License v3.0',
      'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Creative Commons Zero v1.0 Universal',
      'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0',
      'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0'],
  },
  // {
  //     type: 'input',
  //     name: 'installation',
  //     message: 'Enter installation instructions:',
  //   },

  //   {
  //     type: 'input',
  //     name: 'usage',
  //     message: 'Enter usage information:',
  //   },
  //   {
  //     type: 'input',
  //     name: 'contributing',
  //     message: 'Enter contribution guidelines:',
  //   },
  //   {
  //     type: 'input',
  //     name: 'tests',
  //     message: 'Enter test instructions:',
  //   },
  {
    type: 'input',
    name: 'githubUsername',
    message: 'Enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },
  
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

  fs.writeFile(fileName, markdown(data), (err) =>
    err ? console.log(err) : console.log('Success!')

  );
};

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((data) => {
      writeToFile('README.md', data);
    }
    )
}
// Function call to initialize app
init();