const inquirer = require('inquirer');
const generateHtml = require('./src/page-template.js');
const fs = require('fs');
const Manager = require('./lib/manager.classes');
const Engineer = require('./lib/engineer.classes');
const Intern = require('./lib/intern.classes');

let teamProfile = []; 

const addIntern = [
    {
        type: 'input',
        message: `What is the intern's name?`,
        name: 'internName',
    },
    {
        type: 'input',
        message: `What is the intern's ID number?`,
        name: 'internID',
    },
    {
        type: 'input',
        message: `What is the intern's email address?`,
        name: 'internEmail',
    },
    {
        type: 'input',
        message: `What school is the intern currently attending?`,
        name: 'internSchool',
    },
]

const addEngineer = [
    {
        type: 'input',
        message: `What is the engineer's name?`,
        name: 'engineerName',
    },
    {
        type: 'input',
        message: `What is the engineer's ID number?`,
        name: 'engineerId',
    },
    {
        type: 'input',
        message: `What is the engineer's github username?`,
        name: 'engineerGithub',
    },
    {
        type: 'input',
        message: `What is the engineer's email address?`,
        name: 'engineerEmail',
    },
]
const addManager = [
    {
        type: 'input',
        message: `What is the manager's name?`,
        name: 'managerName',
    },
    {
        type: 'input',
        message: `What is the manager's ID number?`,
        name: 'managerID',
    },
    {
        type: 'input',
        messsage: `What is the manager's email address?`,
        name: 'managerEmail',
    },
    {
        type: 'input',
        message: `What is the manager's office number?`,
        name: 'officeNumber',
    },
]

const menuOptions = [
    {
        type: 'list',
        message: `Would you like to:`,
        choices: ['Add an engineer', 'Add an intern', 'Finish building your team'],
        name: 'menu',
    },
]
const teamName = [
    {
        type: 'input',
        messagae: `Welcome to the Team Profile Generator. Please enter your team name.`,
        name: 'teamName'
    }
]

function generateTeam() {
    const fileName = 'team';
    fs.writeFileSync(`./dist/${fileName}.html`, generateHtml(teamProfile), 'utf-8');
}

function pushIntern() {
    inquirer.prompt(addIntern)
    .then(function(data) {
        const intern = new Intern(data.internName, data.internId, data.internEmail, data.internSchool);
        teamProfile.push(intern);
        pushMenu();
    });
}

function pushEngineer() {
    inquirer.prompt(addEngineer)
    .then(function(data) {
        const engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGithub);
        teamProfile.push(engineer);
        pushMenu();
    });
}

function pushMenu() {
    inquirer.prompt(menuOptions)
    .then(function(userChoice) {
        switch (userChoice.menu) {
            case 'Add an engineer':
                pushEngineer();
                break;
            case 'Add an intern':
                pushIntern();
                break;
            default:
                generateTeam();
                console.log('Your team profile has been created! Check it out in the dist folder.')
        }
    });
}

function pushManager() {
    inquirer.prompt(addManager)
    .then(function(data) {
        const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.officeNumber);
        teamProfile.push(manager);
        pushMenu();
    });
    
}


pushManager();