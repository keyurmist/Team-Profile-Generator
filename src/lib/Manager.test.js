const Manager = require("./Manager.js");

test("creates a Manager object", () => {
  const manager = new Manager("Keyur", 420, "keyurmist@gmail.com", 99);
  expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("checking role.", () => {
  const manager = new Manager("Keyur", 420, "keyurmist@gmail.com", 99);
  expect(manager.getRole()).toBe("Manager");
});
