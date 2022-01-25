const Engineer = require("../classes/Engineer");

describe("Engineer", () => {
    it("should return the name, id, email, and role", () => {
        const person1 = new Engineer("Farley","Bacon","chicken@foobar.com","https://github.com");

        expect(person1.getName()).toEqual("Farley");
        expect(person1.getId()).toEqual("Bacon");
        expect(person1.getEmail()).toEqual("chicken@foobar.com");
        expect(person1.getGithub()).toEqual("https://github.com")
        expect(person1.getRole()).toEqual("Engineer");
    })
})