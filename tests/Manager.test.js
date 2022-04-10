const Manager = require("../lib/manager")

describe("Manager", () => {
    it("should create a new instance of Manager", () => {    
    const manager = new Manager("John", "222", "email@email.com", "A777");
    expect(manager.name).toBe("John");
    expect(manager.id).toBe("222");
    expect(manager.email).toBe("email@email.com")
    expect(manager.officeNumber).toBe("A777")
    expect(manager.getRole()).toBe("Manager")
    expect(manager.getName()).toBe("John")
    expect(manager.getId()).toBe("222")
    expect(manager.getEmail()).toBe("email@email.com")
})
})