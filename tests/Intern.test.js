const Intern = require("../lib/intern")

describe("Intern", () => {
    it("should create a new instance of Intern", () => {    
    const intern = new Intern("John", "222", "email@email.com", "Penn");
    expect(intern.name).toBe("John");
    expect(intern.id).toBe("222");
    expect(intern.email).toBe("email@email.com")
    expect(intern.school).toBe("Penn")
    expect(intern.getRole()).toBe("Intern")
})
})