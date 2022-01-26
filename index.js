const inquirer = require('inquirer');
const fs = require('fs');

const generateTeamProfile = require('./generateTeamProfile');

const Manager = require('./classes/Manager');
const Engineer = require('./classes/Engineer');
const Intern = require('./classes/Intern');

const teamCards = [];

//function to write to file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}
const addEmployee = () => {
    console.log(`===========
Adding Employee
===========`)
    inquirer
        .prompt([
            {
                type: 'list',
                message: "Select employee role: ",
                name: 'role',
                choices: ['Engineer', 'Intern'],
            },
            {
                type: 'name',
                message: "Employee's name: ",
                name: 'name',
            },
            {
                type: 'input',
                message: "Employee's ID: ",
                name: 'id',
            },
            {
                type: 'input',
                message: "Employee's email: ",
                name: 'email',
            },
            {
                type: 'input',
                message: "Employee's github username: ",
                name: 'github',
                when: (input) => input.role === "Engineer",
            },
            {
                type: 'input',
                message: "Intern's school: ",
                name: 'school',
                when: (input) => input.role === "Intern",
            },
            {
                type: 'confirm',
                message: "Add another employee? ",
                name: 'addEmployee',
                default: false,
            },

        ])
        .then((employeeResponse) => {
            let employee;
            console.log('role: ',employeeResponse.role);
            if (employeeResponse.role === "Engineer") {
                employee = new Engineer(employeeResponse.name, employeeResponse.id, employeeResponse.email, employeeResponse.github);
            } else if (employeeResponse.role === "Intern") {
                employee = new Intern(employeeResponse.name, employeeResponse.id, employeeResponse.email, employeeResponse.school);
            }
            teamCards.push(employee);
            if (employeeResponse.addEmployee) {
                return addEmployee();
            } else {
                return teamCards;
            }

        });
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
            addEmployee();

        });


}
// Function call to initialize app
init();
