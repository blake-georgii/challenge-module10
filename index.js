const fs = require('fs');
const inquirer = require('inquirer');

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

