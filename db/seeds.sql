INSERT INTO department (name)
VALUES ("Corporate"),
("Human Resources"),
("Accounting"),
("Engineering");

INSERT INTO role (title, salary, department_id)
VALUES ("CEO", 1000000.00, 1),
("CTO", 900000.00, 1),
("CFO", 800000.00, 1),
("HR Manager", 120000.00, 2),
("Accountant", 90000.00, 3),
("Senior Engineer", 120000.00, 4),
("Junior Engineer", 80000.00, 4);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jae", "Ahn", 1, NULL),
("Richard", "Hendricks", 2, 1),
("Erlich", "Bachman", 3, 1),
("Monica", "Hall", 4, 1),
("Jared", "Dunn", 5, 3),
("Bertram", "Gilfoyle", 6, 2),
("Dinesh", "Chugtai", 7, 6);
