const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        if(!github){
            throw new Error("You are missing a github profile")
        }
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return Engineer.name;
    }
}

module.exports = Engineer;