const inquirer = require('inquirer');
const fs = require('fs');

//function to write to file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}