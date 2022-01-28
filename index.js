const mysql = require('mysql2');
const inquirer = require('inquirer');
const consoleTable = require('console.table');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rootroot',
    database: 'company_db'
});

const mainMenuPrompt = [
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

// // const addRolePrompt = [
// //     {
// //         type: 'input',
// //         message: 'Please enter the name of the role.',
// //         name: 'roleName'
// //     },
// //     {
// //         type: 'input',
// //         message: 'Please enter the salary for the role.',
// //         name: 'roleSalary'
// //     },
// //     {
// //         type: 'list',
// //         message: 'Please enter the department of the role',
// //         choices: ['dept 1', 'dept2', 'dept3'],
// //         name: 'roleDept'
// //     }
// // ]

// const addEmpPrompt = [
//     {
//         type: 'input',
//         message: 'Please enter the first name of the employee.',
//         name: 'EmpFirstName'
//     },
//     {
//         type: 'input',
//         message: 'Please enter the last name of the employee.',
//         name: 'EmpLastName'
//     },
//     {
//         type: 'list',
//         message: 'Please select the role of the employee.',
//         choices: ['roleChoices'],
//         name: 'EmpRole'
//     },
//     {
//         type: 'list',
//         message: 'Please select the manager that the employee reports to.',
//         choices: ['managerChoices'],
//         name: 'empMngr'
//     }
// ]

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

const mainMenu = () => {
    inquirer.prompt(mainMenuPrompt).then((answer) => {
        switch (answer.menuOption) {
            case 'View all departments':
                console.log('Displaying all departments:');
                viewDepartments();
                break;
            case 'View all roles':
                console.log('Displaying all roles:');
                viewRoles();
                break;
            case 'View all employees':
                console.log('View all employees');
                viewEmployees();
                break;
            case 'Add a department':
                console.log('Add a department');
                addDepartment();
                break;
            case 'Add a role':
                console.log('Add a role');
                addRole();
                break;
            case 'Add an employee':
                console.log('Add an employee');
                addEmployee();
                break;
            case 'Update an employee role':
                console.log('Update an employee role');
                break;
            case 'Quit':
                console.log('Quit');
                break;
        }
    })
}

const viewDepartments = () => {
    db.query(`SELECT * FROM department`, (err, result) => {
        if (err) {
            console.log(err);
        }
        console.table(result);
        mainMenu();
    })
}

const viewRoles = () => {
    db.query(`SELECT role.title AS Position, role.id, department.name AS Department, role.salary FROM role JOIN department ON department.id = role.department_id;`, (err, result) => {
        if (err) {
            console.log(err);
        }
        console.table(result);
        mainMenu();
    })
}

const viewEmployees = () => {
    db.query(`SELECT employee.id, employee.first_name AS First, employee.last_name AS Last, role.title AS Position, role.salary AS Salary, department.name AS Department, CONCAT(m.first_name, ' ', m.last_name) AS Manager From employee INNER JOIN role on role.id = employee.role_id INNER JOIN department ON department.id = role.department_id LEFT JOIN employee m ON employee.manager_id = m.id;`, (err, result) => {
        if (err) {
            console.log(err);
        }
        console.table(result);
        mainMenu();
    })
}

const addDepartment = () => {
    inquirer.prompt(addDeptPrompt).then((answer) => {
        db.query(`INSERT INTO department(name) VALUES(?);`, answer.deptName, (err, result) => {
            if (err) {
                console.log(err);
            }
            console.log("New department successfully added!");
            mainMenu();
        })
    }
    )
}

const addRole = () => {
    db.query(`SELECT * FROM department`, (err, departmentResult) => {
        if (err) {
            console.log(err);
        }
        departmentResult = departmentResult.map((department) => {
            return {
                name: department.name,
                value: department.id
            };
        });
        inquirer.prompt([
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
                type: 'list',
                message: 'Please enter the department of the role',
                choices: departmentResult,
                name: 'roleDept'
            }
        ]).then((answer) => {
            db.query(`INSERT INTO role SET ?`,
            {
                title: answer.roleName,
                salary: answer.roleSalary,
                department_id: answer.roleDept
            },
            (err, result) => {
                if (err) {
                    console.log(err);
                }
                console.log("New role successfully added!");
                mainMenu();
            }
            )
        })
    })
}

const addEmployee = () => {
    db.query(`SELECT * FROM role`, (err, roleResult) => {
        if (err) {
            console.log(err);
        }
        roleResult = roleResult.map((roles) => {
            return {
                name: roles.title,
                value: roles.id
            };
        });
        db.query(`SELECT first_name, last_name, manager_id FROM employee`, (err, managerResult) => {
            if (err) {
                console.log(err);
            }
            managerResult = managerResult.map((managers) => {
                return {
                    name: managers.first_name + " " + managers.last_name,
                    value: managers.manager_id
                };
            });
            inquirer.prompt([
                {
                    type: 'input',
                    message: 'Please enter the first name of the employee.',
                    name: 'empFirstName'
                },
                {
                    type: 'input',
                    message: 'Please enter the last name of the employee.',
                    name: 'empLastName'
                },
                {
                    type: 'list',
                    message: 'Please select the role of the employee.',
                    choices: roleResult,
                    name: 'empRole'
                },
                {
                    type: 'list',
                    message: 'Please select the manager that the employee reports to.',
                    choices: managerResult,
                    name: 'empMngr'
                }
            ]).then((answer) => {
                db.query(`INSERT INTO employee SET ?`, 
                {
                    first_name: answer.empFirstName,
                    last_name: answer.empLastName,
                    role_id: answer.empRole,
                    manager_id: answer.empMngr
                },
                (err, result) => {
                    if(err) {
                        console.log(err);
                    }
                    console.log('New employee successfully added!')
                    mainMenu();
                })
            })
        })
    })
}

mainMenu();