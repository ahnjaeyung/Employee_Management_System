const mysql = require('mysql2');
const inquirer = require('inquirer');
const consoleTable = require('console.table');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'company_db'
});

const mainMenu = [
    {
        type: 'list',
        message: 'Please select one of the following options.',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'Quit'],
        name: 'menuOption'
    }
]

const addDeptPrompt = [
    {
        type: 'input',
        message: 'Please enter the name of the department.',
        name: 'deptName'
    }
]

const addRolePrompt = [
    {
        type: 'input',
        message: 'Please enter the name of the role.',
        name: 'roleName'
    },
    {
        type: 'input',
        message: 'Please enter the salary for the role.',
        name: 'roleSalary'
    },
    {
        type: 'input',
        message: 'Please enter the department of the role',
        name: 'roleDept'
    }
]

const addEmpPrompt = [
    {
        type: 'input',
        message: 'Please enter the first name of the employee.',
        name: 'EmpFirstName'
    },
    {
        type: 'input',
        message: 'Please enter the last name of the employee.',
        name: 'EmpLastName'
    },
    {
        type: 'list',
        message: 'Please select the role of the employee.',
        choices: ['role1', 'role2', 'role3'],
        name: 'EmpRole'
    },
    {
        type: 'list',
        message: 'Please select the manager that the employee reports to.',
        choices: ['mngr1', 'mngr2', 'mngr3'],
        name: 'empMngr'
    }
]

const updateEmpRole = [
    {
        type: 'list',
        message: 'Please select an employee to update their role.',
        choices: ['emp1', 'emp2', 'emp3'],
        name: 'empToUpdate'
    },
    {
        type: 'list',
        message: 'Please select the new role for the employee',
        choices: ['role1', 'role2', 'role3']
    }
]

function init () {
    console.log('Employee Management System');
}



init();