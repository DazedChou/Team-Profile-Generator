//Manager Class
class Manager extends Employee {
    constructor(officeNumber){
        this.officeNumber = officeNumber;
    }
    getNumber() {
        return this.officeNumber;
    }
    getRole() {
        return Manager.name();
    }
}

module.exports = Manager;