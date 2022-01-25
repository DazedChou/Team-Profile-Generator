//Intern Class
class Intern extends Employee {
    constructor(school){
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