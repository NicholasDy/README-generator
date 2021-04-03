const inquirer = require('inquirer');
const fs = require('fs');


const generateHTML = (answers) =>
    `#  ${answers.name}

## Project Name - ${answers.name} ${answers.license}

### Table of Contents 
1. [User Story](###user-story)
2. [Description](###description-of-the-app)
3. [Intallition Instructions](###installation-instructions)
4. [Usage](###usage)
5. [Contributors](###contributors)
6. [Tests Done](###tests-done)
7. [Questions](###questions)
9. [License](###license)

### User Story - 
${answers.userStory}

### Description of the App - 
${answers.description}

### Installation -
${answers.installationInstructions}

### Usage- 
${answers.usage}

### Tests-Done
${answers.test}

### Questions
GitHub User Name: ${answers.githubUsername}
Email: ${answers.email}

### License
The license that covers this project is the one used by $


`;

inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of your Project?"
        },
        {
            type: "input",
            name: "userStory",
            message: "Please put your User Story to your project."
        },
        {
            type: "input",
            name: "description",
            message: "Please put your description of your Project."
        },
        {
            type: "input",
            name: "installationInstructions",
            message: "What are the installation instructions for your project?"
        },
        {
            type: "input",
            name: "usage",
            message: "What is the general usage of your project?"
        },
        {
            type: "input",
            name: "contributors",
            message: "Who contributed to the project?"
        },
        {
            type: "input",
            name: "tests",
            message: "What is the plan for testing your project?"
        },
        {
            type: "input",
            name: "githubUsername",
            message: "What is your GitHub username?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?"
        },
        {
            type: 'list',
            name: "license",
            message: "What type of license do you want to base yours off of?",
            choices: ['MIT', 'Apache', 'IBM']
        },
    ])
    .then(answers => {
        const htmlPageContent = generateHTML(answers);

        fs.writeFile(`README.md`, htmlPageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created your ReadMe!')
        );

        switch (answers.license) {
            case "MIT":
                answers.license = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
                licenseUsed = 'MIT'
                break;
            case "Apache":
                answers.license = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
                licenseUsed = 'Apache'
                break;
            case "IBM":
                answers.license = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
                licenseUsed = 'IBM'
                break;
        }
    })

    // the table of contents will take each of the sections and list them in order on the page already hard coded out
