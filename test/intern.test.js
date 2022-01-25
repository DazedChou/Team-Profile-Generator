const Intern = require("../classes/Intern");

describe("Intern", () => {
    it("should return the name, id, email, and role", () => {
        const person1 = new Intern("Farley","Bacon","chicken@foobar.com","UCB");

        expect(person1.getName()).toEqual("Farley");
        expect(person1.getId()).toEqual("Bacon");
        expect(person1.getEmail()).toEqual("chicken@foobar.com");
        expect(person1.getSchool()).toEqual("UCB");
        expect(person1.getRole()).toEqual("Intern");
    })
})