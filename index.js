const inquirer = require('inquirer');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const fs = require('fs');
const path = require('path'); //allows me to link in a different directory
const template = require('./src/template');
const managersArr = [];
const engineersArr = [];
const internsArr = [];

const mgrQuestions = [
    {   name: 'mgrName',
        type: 'input',
        message: 'What is the managers name?',
        validate: (value) => {
            if(value) {
                return true;
            } else {
                return 'Please enter a name for this role.'
            }}},
    {    name: 'mgrID',
         type: 'input',
         message: 'What is the manager ID #?',
         validate: (value) => {
            if(value) {
                return true;
            } else {
                return 'ID # require. Please enter ID #.'
            }}},
    {   name: 'mgrEmail',
        type: 'input',
        message: 'What is the manager email?',
        validate: (value) => {
            if(value) {
                return true;
            } else {
                return 'Email REQUIRED. Please provide an email.'
            }}},
    {   name: 'mgrOfficeNumber',
        type: 'input',
        message: 'What is the manager office number?',
        validate: (value) => {
            if(value) {
                return true;
            } else {
                return 'Please enter an office number.'
            }}},
];
const engQuestions = [
    {   name: 'engName',
        type: 'input',
        message: 'What is the engineers name?',
        validate: (value) => {
            if(value) {
                return true;
            } else {
                return 'Please enter a name for engineer role.'
            }}},
    {   name: 'engID',
        type: 'input',
        message: 'What is the engineers ID #?',
        validate: (value) => {
            if(value) {
                return true;
            } else {
                return 'ID # require. Please enter ID #.'
            }}},
    {   name: 'engEmail',
        type: 'input',
        message: 'What is the engineers email?',
        validate: (value) => {
            if(value) {
                return true;
            } else {
                return 'Email REQUIRED. Please provide an email.'
            }}},
    {   name: 'engGitHub',
        type: 'input',
        message: 'What is the engineers GitHub username?',
        validate: (value) => {
            if(value) {
                return true;
            } else {
                return 'GitHub username is REQUIRED for engineer team role.'
            }}},
];
const intQuestions = [
    {   name: 'intName',
        type: 'input',
        message: 'What is the interns name?',
        validate: (value) => {
            if(value) {
                return true;
            } else {
                return 'Please enter a name for intern role.'
            }}},
    {   name: 'intID',
        type: 'input',
        message: 'What is the interns ID #?',
        validate: (value) => {
            if(value) {
                return true;
            } else {
                return 'ID # require. Please enter ID #.'
            }}},
    {   name: 'intEmail',
        type: 'input',
        message: 'What is the interns email?',
        validate: (value) => {
            if(value) {
                return true;
            } else {
                return 'Email REQUIRED. Please provide an email.'
            }}},
    {   name: 'intSchool',
        type: 'input',
        message: 'What school is the intern associated with?',
        validate: (value) => {
            if(value) {
                return true;
            } else {
                return 'School name is REQUIRED.'
            }}},
];
const addIntorEng = [
    {   name: 'additional',
        type: 'list',
        message: 'Would you like to add another role?',
        choices: ['Add intern', 'Add Engineer', 'Complete my team'],
        validate: (value) => {
            if(value) {
                return true;
            } else {
                return 'You MUST select one option.'
            }}},
];

function managerRole() {
    inquirer.prompt(mgrQuestions)
    .then(response => {
        const mgr = new Manager(response.mgrName, response.mgrID, response.mgrEmail, response.mgrOfficeNumber)
        managersArr.push(mgr);
        //insert
    });
};
function engineerRole() {
    inquirer.prompt(engQuestions)
    .then(response => {
        const eng = new Engineer(response.engName, response.engID, response.engEmail, response.engGitHub)
        engineersArr.push(eng);
        //insert
    });
};
function internRole() {
    inquirer.prompt(intQuestions)
    .then(response => {
        const int = new Intern(response.intName, response.inID, response.intEmail, response.intSchool)
        internsArr.push(int);
        //insert
    });
};
