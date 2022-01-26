const inquirer = require('inquirer');
const fs = require('fs');

const generateTeamProfile = require('./generateTeamProfile');

const Manager = require('./classes/Manager');
const Engineer = require('./classes/Engineer');
const Intern = require('./classes/Intern');

const teamCards =[];

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
                message: "Manager's name: ",
                name: 'name',
            },
            {
                type: 'input',
                message: "Manager's ID: ",
                name: 'id',
            },
            {
                type: 'input',
                message: "Manager's email: ",
                name: 'email',
            },
            {
                type: 'input',
                message: "Manager's Office Number: ",
                name: 'number',
            },

        ])
        .then((response) => {
            const manager = new Manager(response.name, response.id, response.email, response.number);
            teamCards.push(manager);
        });

        
}
// Function call to initialize app
init();
