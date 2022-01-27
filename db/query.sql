SELECT * FROM department;

SELECT * FROM role;

SELECT * FROM employee;

SELECT role.title AS Position, role.id, department.name AS Department, role.salary FROM role
JOIN department ON department.id = role.department_id;

SELECT employee.id, employee.first_name AS First, employee.last_name AS Last, role.title AS Position, role.salary AS Salary, department.name AS Department, CONCAT(m.first_name, ' ', m.last_name) AS Manager From employee
INNER JOIN role on role.id = employee.role_id
INNER JOIN department ON department.id = role.department_id
LEFT JOIN employee m ON employee.manager_id = m.id;

