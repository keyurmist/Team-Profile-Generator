const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const createHTML = require("./createhtml");

const teamMembers = [];

const promptManager = () => {
  return inquirer.prompt([
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
      message: "Please enter the manager's ID",
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
      message: "Please enter the manager's email",
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
          return "Please enter a valid number";
        }
        return true;
      },
    },
  ]);
  .then((answerManager) => {
    const manager = new Manager(name, id, email, officeNumber);
    teamMembers.push(manager);
    console.log(manager);
  });
};

const promptEmployee = () => {
  return inquirer.prompt([
    {
        type: 'input',
        name: 'role',
        message: 'Would you liek to add an employee?',
        choices: ['Engineer, Intern, quit']
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
      },
  ]);
};

