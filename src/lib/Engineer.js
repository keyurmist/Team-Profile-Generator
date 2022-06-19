const Employee = require("./Employee");

//Engineer constructor will extend the existing employee one

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer"; // this will override the employee status to Engineer
  }
}

module.exports = Engineer;
