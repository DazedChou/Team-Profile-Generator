const Manager = require("../classes/Manager");

describe("Manager", () => {
    it("should return the name, id, email, and role", () => {
        const person1 = new Manager("Farley","Bacon","chicken@foobar.com","123-456-7890");

        expect(person1.getName()).toEqual("Farley");
        expect(person1.getId()).toEqual("Bacon");
        expect(person1.getEmail()).toEqual("chicken@foobar.com");
        expect(person1.getNumber()).toEqual("123-456-7890");
        expect(person1.getRole()).toEqual("Manager");
    })
})