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
* Position
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

Once the user has entered this information about the intern, they are presented with the main menu once again and may proceed to add another engineer, intern, or finish building their team.  

If the user selects the *Finish building my team* option, an *index.html* file is generated in the dist folder.  The user can then open that file in their default web browser to view their team profile page.

## Credits  
Jae Ahn
## License  
Read about MIT License:  
[MIT License](https://opensource.org/licenses/MIT)  
## How to Contribute  
Do not contribute.  
## Tests  
Test with Jest
## Questions
For any questions, reach me at: [ahnjaeyung](https://github.com/ahnjaeyung),  
or email me at: ahn.jaeyung@gmail.com.