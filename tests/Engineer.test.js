const Engineer = require("../lib/engineer")


describe("Engineer", () => {
    it("should create a new instance of Engineer", () => {    
    const engineer = new Engineer("John", "222", "email@email.com", "username");
    expect(engineer.name).toBe("John");
    expect(engineer.id).toBe("222");
    expect(engineer.email).toBe("email@email.com")
    expect(engineer.github).toBe("username")
    expect(engineer.getRole()).toBe("Engineer")
})
})

