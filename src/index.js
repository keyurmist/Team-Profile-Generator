const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const createHTML = require("./createhtml");

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

      teamArray.push(manager);
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

const writeFile = (answers) => {
  fs.writeFile("./dist/genindex.html", answers, (err) => {
    if (err) {
      console.log("Error");
    } else {
      console.log("Successfully wrote to genindex.html");
    }
  });
};
