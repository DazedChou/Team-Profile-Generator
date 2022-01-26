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
                    name: 'id',
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
                    name: 'github',
                    when: (input) => input.role === "Intern",
                },
                {
                    type: 'list',
                    message: "Add another employee? ",
                    name: 'addEmployee',
                    choices: ['yes', 'no']
                },

            ])
            .then((employeeResponse) => {
                let employee;

                if (employeeResponse.role === "Engineer") {
                    employee = new Engineer(employeeResponse.name, employeeResponse.id, employeeResponse.email, employeeResponse.github);
                } else if (response.role === "Intern") {
                    employee = new Intern(employeeResponse.name, employeeResponse.id, employeeResponse.email, employeeResponse.school);
                }
                teamCards.push(employee);
                if(employeeResponse.addEmployee == "yes"){
                    return addEmployee();
                }else{
                    return teamCards;
                }

            });
        });
    
    // const addEmployee = () => {
    //     inquirer
    //         .prompt([
    //             {
    //                 type: 'list',
    //                 message: "Select employee role: ",
    //                 name: 'role',
    //                 choices: ['Engineer', 'Intern'],
    //             },
    //             {
    //                 type: 'input',
    //                 message: "Employee's ID: ",
    //                 name: 'id',
    //             },
    //             {
    //                 type: 'input',
    //                 message: "Employee's email: ",
    //                 name: 'email',
    //             },
    //             {
    //                 type: 'input',
    //                 message: "Employee's github username: ",
    //                 name: 'github',
    //                 when: (input) => input.role === "Engineer",
    //             },
    //             {
    //                 type: 'input',
    //                 message: "Intern's school: ",
    //                 name: 'github',
    //                 when: (input) => input.role === "Intern",
    //             },
    //             {
    //                 type: 'list',
    //                 message: "Add another employee? ",
    //                 name: 'addEmployee',
    //                 choices: ['yes', 'no']
    //             },

    //         ])
    //         .then((response) => {
    //             let employee;

    //             if (response.role === "Engineer") {
    //                 employee = new Engineer(response.name, response.id, response.email, response.github);
    //             } else if (response.role === "Intern") {
    //                 employee = new Intern(response.name, response.id, response.email, response.school);
    //             }
    //             teamCards.push(employee);
    //             if(response.addEmployee == "yes"){
    //                 return addEmployee();
    //             }else{
    //                 return teamCards;
    //             }

    //         });
    // }
    // addManager().then(addEmployee);
}
// Function call to initialize app
init();
