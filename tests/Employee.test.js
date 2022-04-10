const { hasUncaughtExceptionCaptureCallback } = require("process");
const { isTypedArray } = require("util/types");
const Employee = require("../lib/employee")

describe("Employee", () => {
    it("should create a new object", () => {
        
    
    const employee = new Employee("John", 222, "email@email.com");
    expect(employee.name).toBe("John");
    expect(employee.id).toBe(222);
    expect(employee.email).toBe("email@email.com")
})
})