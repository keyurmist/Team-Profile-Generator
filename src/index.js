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
};

const promptEngineer = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the engineer's name?",
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
      message: "Please enter the engineer's ID",
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
      message: "Please enter the engineer's email",
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
      message: "Please enter the engineer's github",
      validate: async (answer) => {
        if (!answer) {
          return "Please enter a valid username";
        }
        return true;
      },
    },
  ]);
};

const promptIntern = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the intern's name?",
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
      message: "Please enter the intern's ID",
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
      message: "Please enter the intern's email",
      validate: async (answer) => {
        if (!answer) {
          return "Please enter a valid email";
        }
        return true;
      },
    },

    {
      type: "input",
      name: "school",
      message: "Please enter the intern's school",
      validate: async (answer) => {
        if (!answer) {
          return "Please enter a valid school";
        }
        return true;
      },
    },
  ]);
};
