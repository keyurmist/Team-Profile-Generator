const Employee = require("./Employee");

describe("creates new Employee object", () => {
  it("name is Keyur, ID is a number, email is a string", () => {
    const employee = new Employee("Keyur", 420, "keyurmist@gmail.com");

    expect(employee.name).toBe("Keyur");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
  });
});

//Tests to see if get methods work

test("name", () => {
  const employee = new Employee("Keyur");
  expect(employee.getName()).toEqual(expect.any(String));
});

test("checking id method", () => {
  const employee = new Employee("Keyur", 420, "keyurmist@gmail.com");
  expect(employee.getId()).toBe(employee.id);
});

test("checking getEmail method.", () => {
  const employee = new Employee("Keyur", 420, "keyurmist@gmail.com");
  expect(employee.getEmail()).toBe(employee.email);
});

test("checking role.", () => {
  const employee = new Employee("Keyur", 420, "keyurmist@gmail.com");
  expect(employee.getRole()).toBe("Employee");
});
