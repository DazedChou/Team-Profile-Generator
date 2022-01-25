class Engineer extends Employee {
    constructor(github){
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