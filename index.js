// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated
const fs = require("fs");
const inquirer = require("inquirer");
const generateHtml = require("./generatehtml");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern")
const Engineer = require("./lib/engineer")
const teamMembers = [];

const managerQuestions = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "What is your team manager's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is your team manager's employee ID?",
        name: "id",
      },
      {
        type: "input",
        message: "what is your team manager's email address?",
        name: "email",
      },
      {
        type: "input",
        message: "What is your team manager's office number?",
        name: "officeNumber",
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      teamMembers.push(manager);
      teamMenu();
    });
};

const teamMenu = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        message: "Do you want to add any additional members?",
        name: "menu",
        choices: ["Add an engineer", "Add an Intern", "Done creating members"],
      },
    ])
    .then((userChoice) => {
      console.log(userChoice);
      if (userChoice.menu === "Add an engineer") {
        engineerQuestions();
      } else if (userChoice.menu === "Add an Intern") {
        internQuestions();
      } else {
        createHtml(teamMembers);
      }
    });
};
const engineerQuestions = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "What is your team engineer's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is your team engineer's employee ID?",
        name: "id",
      },
      {
        type: "input",
        message: "what is your team engineer's email address?",
        name: "email",
      },
      {
        type: "input",
        message: "What is your team engineer's GitHub Username?",
        name: "gitHub",
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.gitHub
      );
      teamMembers.push(engineer);
      teamMenu();
    });
};

const internQuestions = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "What is your team intern's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is your team intern's employee ID?",
        name: "id",
      },
      {
        type: "input",
        message: "what is your team intern's email address?",
        name: "email",
      },
      {
        type: "input",
        message: "What is your team intern's school?",
        name: "school",
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      teamMembers.push(intern);
      teamMenu();
    });
};


function createHtml(team) {
  const layout = generateHtml(team);
  console.log(layout);
  fs.writeFile("dist/teamprofile.html", layout, (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}
function init() {
  managerQuestions()

}

// Function call to initialize app
init();
