const inquirer = require('inquirer');
const fs = require('fs');
const generateTeamProfile = require('./generateTeamProfile')
const Manager = require('./classes/Manager');


//function to write to file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "Name: ",
                name: 'name',
            },
            {
                type: 'input',
                message: "Employee ID: ",
                name: 'id',
            },
            {
                type: 'input',
                message: "Email: ",
                name: 'email',
            },
            {
                type: 'input',
                message: "Office Number: ",
                name: 'number',
            },
            {
                type: 'list',
                message: "Select an option from the list below",
                name: 'menu',
                choices: ['Engineer','Intern','Exit'],
            },
        ])
        .then((response) => {
            console.log ("response: ",response);
            const manager = new Manager(response.name, response.id, response.email, response.number);
            console.log(manager.getName());
            const teamProfile = generateTeamProfile(response);
            writeToFile("index.html", teamProfile);
        });
}
// Function call to initialize app
init();
