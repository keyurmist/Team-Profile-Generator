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
  ]);
};
