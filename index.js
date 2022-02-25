const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');

const team = [];

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
        name: 'name',
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
        name: 'name',
        message: 'Input Intern School:'
    },
];

function promptManager() {
    inquirer.prompt(managerQuestions)
    .then(managerData => {
        let manager = new Manager(managerData.name, managerData.id ,managerData.email ,managerData.officeNumber);
        team.push(manager);
        promptAddOrQuit();
    });
}

function promptAddOrQuit() {
    
}

function promptEngineer() {

}

function promptIntern() {

}

promptManager();