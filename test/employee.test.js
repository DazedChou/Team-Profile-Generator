const Employee = require("../classes/Employee");

describe("Employee", () => {
    it("should return the name, id, email, and role", () => {
        const person1 = new Employee("Farley","Bacon","chicken@foobar.com");

        expect(person1.getName()).toEqual("Farley");
        expect(person1.getId()).toEqual("Bacon");
        expect(person1.getEmail()).toEqual("chicken@foobar.com");
        expect(person1.getRole()).toEqual("Employee");
    });
    
})