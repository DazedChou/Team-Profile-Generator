const Employee = require("./Employee");
//Intern Class
class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        if(!school){
            throw new Error("You are missing a school")
        }
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return Intern.name;
    }
}

module.exports = Intern;