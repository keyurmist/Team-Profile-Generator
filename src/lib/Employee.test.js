const Employee = require("./Employee");

describe("creates new Employee object", () => {
  it("name is Keyur, ID is a number, email is a string", () => {
    const employee = new Employee("Keyur", 420, "keyurmist@gmail.com");

    expect(employee.name).toBe("Keyur");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
  });
});
