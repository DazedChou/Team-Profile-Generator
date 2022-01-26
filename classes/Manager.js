const Employee = require("./Employee");
//Manager Class
class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name,id,email);
        if(!officeNumber){
            throw new Error("You are missing an office number")
        }
        this.officeNumber = officeNumber;
    }
    getNumber() {
        return this.officeNumber;
    }
    getRole() {
        return Manager.name;
    }
}

module.exports = Manager;