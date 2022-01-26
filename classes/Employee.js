//Employer Class
class Employee {
    constructor(name, id, email) {
        if (!name){
            throw new Error ("You are missing a name")
        }
        if (!id){
            throw new Error ("You are missing an id")
        }
        if (!email){
            throw new Error ("You are missing an email")
        }

        this.name = name;    
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return Employee.name;
    }
}


module.exports = Employee;