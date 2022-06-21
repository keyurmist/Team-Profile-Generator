const Employee = require("./Employee.js");

//Again, Intern constructor extends the Employee
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern"; // This overrides Employee to Intern
  }
}

module.exports = Intern;
