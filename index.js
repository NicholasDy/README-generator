const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = (answers) =>
    `#  ${answers.name}

## Project Name - ${answers.name}

### Table of Contents 
1. User Story[Go to Real Cool Heading section](###user-story)
2. Description[Go to Real Cool Heading section](###description-of-the-app)
3. Installation Instructions[Go to Real Cool Heading section](###installation-instructions)
4. Usage[Go to Real Cool Heading section](###usage)
5. Contributors[Go to Real Cool Heading section](###contributors)
6. Tests Done[Go to Real Cool Heading section](###tests-done)
7. Contact Info[Go to Real Cool Heading section](###contact-info)
9. License[Go to Real Cool Heading section](###license)

### User Story - 
${answers.userStory}

### Description of the App - 
${answers.description}

### Installation -
${answers.installationInstructions}

### Usage- 
${answers.usage}

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
            message: "What type of license do you need?",
            choices: ['Strong Restrictions', 'Mild Restrictions', 'No Restrictions']
        },
    ])
    .then (answers =>{
        const htmlPageContent = generateHTML(answers);

        fs.writeFile(`README.md`, htmlPageContent, (err) =>
          err ? console.log(err) : console.log('Successfully created your ReadMe!')
        );

        let licenseEl = answers.license
        generateLicense(licenseEl)   
    })



    function generateLicense(licenseEl){
        switch(licenseEl){
            case "Strong Restrictions":
                // creates the text file with a strong restriction
                break;
            case "Mild Restrictions":
                // creates the text file with a Mild restriction
                break;
            case "No Restrictions":
                // creates the text file with no restrictions
                break;
        }

    }

    // the table of contents will take each of the sections and list them in order on the page already hard coded out
    // adding a license.txt to the file