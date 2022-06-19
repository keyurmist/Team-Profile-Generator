const Intern = require("./Intern");

test("creates an Intern object", () => {
  const intern = new Intern("Keyur", 420, "keyurmist@gmail.com", "UoB");
  expect(intern.github).toEqual(expect.any(String));
});

test("checking getSchool method.", () => {
  const intern = new Intern("Keyur", 420, "keyurmist@gmail.com", "UoB");
  expect(intern.getSchool()).toBe(intern.school);
});

test("checking role.", () => {
  const intern = new Intern("Keyur", 420, "keyurmist@gmail.com", "UoB");
  expect(intern.getRole()).toBe("Intern");
});
