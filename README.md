# Employee Management System
## Badges  
  [![License: MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  
## Description  
![Employee Management System Gif](./Assets/EmployeeManagementSystemDemo.gif)  

This is a command-line application that allows a user to manage their company by viewing, adding, or updating their company's departments, roles, and employees.

This application was created using technologies such as:
* JavaScript
* MySQL
* Node.js
* NPM
* Inquirer.js
* console.table
* figlet
* MySQL2
* Screencastify

Some of the methods used in creating this application were found from resources such as W3Schools, MDN Web Docs, and Stack Overflow.  
[Link to Demo Video](https://drive.google.com/file/d/1-QrfTHP05CRvAgn8cemSWg7dDJ8j6VjM/view)  
## Table of Contents  
  - [Badges](#badges)  
  - [Description](#description)  
  - [Installation](#installation)  
  - [Usage](#usage)  
  - [Credits](#credits)  
  - [License](#license)  
  - [How to Contribute](#how-to-contribute)  
  - [Tests](#tests)  
  - [Questions](#questions)  
## Installation  
Clone repo and npm i  
## Usage  
This application is launched through the command line ("node index.js").  Once launched, the user is greeted with the main menu which has the following options:  
* View all departments
* View all roles
* View all employees
* Add a department
* Add a role
* Add an employee
* Update an employee role
* Quit   

When the user selects the *View all departments* option, then they are presented with a formatted table displaying department names and department ids.  

When the user selects the *View all roles* option, then they are presented with a formatted table displaying:
* Role name (position)
* Role ids
* Departments
* Salary 

When the user selects the *View all employees* option, then they are presented with a formatted table displaying:
* Employee ID
* First Name
* Last Name
* Position
* Salary
* Department
* Manager

When the user selects the *Add a department* option, then they are prompted to enter the name of the department and that department is added to the database.

When the user selects the *Add a role* option, then they are prompted to enter the following information about the new role:
* Role name
* Salary
* Department  

The new role is then added to the database.  

When the user selects the *Add an employee* option, then they are prompted to enter the following information about the new employee:
* First name
* Last name
* Role
* Manager  

The new employee is then added to the database.  

When the user selects the *Update an employee role* option, then they are prompted to select an employee to update and their new role, and this information is updated in the database.

When the user selects the *Quit* option, then the application is ended.  

## Credits  
Jae Ahn
## License  
Read about MIT License:  
[MIT License](https://opensource.org/licenses/MIT)  
## How to Contribute  
Contact me if you would like to contribute. 
## Tests  
Contact me if you would like to test.
## Questions
For any questions, reach me at: [ahnjaeyung](https://github.com/ahnjaeyung),  
or email me at: ahn.jaeyung@gmail.com.