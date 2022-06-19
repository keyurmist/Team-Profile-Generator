const Engineer = require("./Engineer");

test("creates an Engineer object", () => {
  const engineer = new Engineer(
    "Keyur",
    420,
    "keyurmist@gmail.com",
    "keyurmist"
  );
  expect(engineer.github).toEqual(expect.any(String));
});

test("checking getEmail method.", () => {
  const engineer = new Engineer(
    "Keyur",
    420,
    "keyurmist@gmail.com",
    "keyurmist"
  );
  expect(engineer.getGithub()).toBe(engineer.github);
});

test("checking role.", () => {
  const engineer = new Engineer(
    "Keyur",
    420,
    "keyurmist@gmail.com",
    "keyurmist"
  );
  expect(engineer.getRole()).toBe("Engineer");
});
