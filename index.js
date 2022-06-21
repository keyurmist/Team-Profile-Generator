const fs = require("fs");
const Manager = require("./src/lib/Manager.js");
const Engineer = require("./src/lib/Engineer.js");
const Intern = require("./src/lib/Intern.js");
const createHTML = require("./src/createhtml.js");

const inquirer = require("inquirer");

const teamMembers = [];

const promptManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the manager's name?",
        validate: async (answer) => {
          if (!answer) {
            return "Please enter a valid name";
          }
          return true;
        },
      },
      {
        type: "input",
        name: "id",
        message: "Please enter the manager's ID.",
        validate: async (answer) => {
          if (!answer) {
            return "Please enter a valid ID";
          }
          return true;
        },
      },
      {
        type: "input",
        name: "email",
        message: "Please enter the manager's email.",
        validate: async (answer) => {
          if (!answer) {
            return "Please enter a valid email";
          }
          return true;
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Please enter the manager's office number",
        validate: async (answer) => {
          if (!answer) {
            return "Please enter a valid office number";
          }
          return true;
        },
      },
    ])
    .then((managerAnswer) => {
      const { name, id, email, officeNumber } = managerAnswer;
      const manager = new Manager(name, id, email, officeNumber);

      teamMembers.push(manager);
      console.log(manager);
    });
};

const promptEmployee = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "Would you liek to add an employee?",
        choices: ["Engineer, Intern, quit"],
      },

      {
        type: "input",
        name: "name",
        message: "What is the employee's name?",
        validate: async (answer) => {
          if (!answer) {
            return "Please enter a valid name";
          }
          return true;
        },
      },

      {
        type: "input",
        name: "id",
        message: "Please enter the employee's ID",
        validate: async (answer) => {
          if (!answer) {
            return "Please enter a valid ID";
          }
          return true;
        },
      },

      {
        type: "input",
        name: "email",
        message: "Please enter the employee's email",
        validate: async (answer) => {
          if (!answer) {
            return "Please enter a valid email";
          }
          return true;
        },
      },

      {
        type: "input",
        name: "github",
        message: "Please enter the employee's github",
        validate: async (answer) => {
          if (!answer) {
            return "Please enter a valid username";
          }
          return true;
        },
        when: (answer) => answer.role === "Engineer",
      },

      {
        type: "input",
        name: "school",
        message: "Please enter the employee's school",
        validate: async (answer) => {
          if (!answer) {
            return "Please enter a valid school";
          }
          return true;
        },
        when: (answer) => answer.role === "Intern",
      },

      {
        type: "confirm",
        name: "anotherEmployee",
        message: "Would you like to add more members?",
        default: false,
      },
    ])
    .then((employeeAnswer) => {
      let { name, id, email, role, github, school, anotherEmployee } =
        employeeAnswer;
      let employee;

      if (role === "Engineer") {
        employee = new Engineer(name, id, email, github);

        console.log(employee);
      } else if (role === "Intern") {
        employee = new Intern(name, id, email, school);

        console.log(employee);
      }

      teamMembers.push(employee);

      if (anotherEmployee) {
        return promptEmployee(teamMembers);
      } else {
        return teamMembers;
      }
    });
};

const writeFile = (data) => {
  fs.writeFile("../dist/genindex.html", data, (err) => {
    if (err) {
      console.log("Error");
    } else {
      console.log("Successfully wrote to genindex.html");
    }
  });
};

promptManager()
  .then(promptEmployee)
  .then((teamMembers) => {
    return createHTML(teamMembers);
  })
  .then((teamHTML) => {
    return writeFile(teamHTML);
  })
  .catch((err) => {
    console.log(err);
  });
