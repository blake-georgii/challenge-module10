const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const htmlGenerator = require('./src/htmlGenerator');

let team = [];

const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'Input Manager Name:'
    },
    {
        type: 'input',
        name: 'id',
        message: 'Input Manager Id:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Input Manager Email:'
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Input Manager Office Number:'
    },
];

const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'Input Engineer Name:'
    },
    {
        type: 'input',
        name: 'id',
        message: 'Input Engineer Id:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Input Engineer Email:'
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'Input Engineer GitHub:'
    },
];

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'Input Intern Name:'
    },
    {
        type: 'input',
        name: 'id',
        message: 'Input Intern Id:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Input Intern Email:'
    },
    {
        type: 'input',
        name: 'school',
        message: 'Input Intern School:'
    },
];

function promptManager() {
    inquirer.prompt(managerQuestions)
        .then(managerData => {
            let manager = new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNumber);
            team.push(manager);
            promptAddOrQuit();
        });
}

function promptAddOrQuit() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'type',
            message: 'Add another employee or finish?',
            choices: ['Engineer', 'Intern', 'Finish'],
        },])
        .then(choice => {
            if (choice.type == 'Engineer') {
                promptEngineer();
            }
            else if (choice.type == 'Intern') {
                promptIntern()
            }
            else{
                MakeHTML();
            }
        })
}

function promptEngineer() {
    inquirer.prompt(engineerQuestions)
        .then(engineerData => {
            let engineer = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.gitHub)
            team.push(engineer);
            promptAddOrQuit();
        })
}

function promptIntern() {
    inquirer.prompt(internQuestions)
        .then(internData => {
            let intern = new Intern(internData.name, internData.id, internData.email, internData.gitHub)
            team.push(intern);
            promptAddOrQuit();
        });
}

function MakeHTML(){
    fs.writeFileSync('./dist/index.html', htmlGenerator(team));
    fs.copyFileSync('./src/style.css', './dist/style.css')
}

promptManager();
