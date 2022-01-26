INSERT INTO department (id, name)
VALUES (1, "Corporate"),
(2, "Human Resources"),
(3, "Accounting"),
(4, "Engineering");

INSERT INTO role (id, title, salary, department_id)
VALUES (10, "CEO", 1000000.00, 1),
(11, "CTO", 900000.00, 1),
(12, "CFO", 800000.00, 1),
(20, "HR Manager", 120000.00, 2),
(30, "Accountant", 90000.00, 3),
(40, "Senior Engineer", 120000.00, 4),
(41, "Junior Engineer", 80000.00, 4);


INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (101, "Jae", "Ahn", 10, NULL),
(111, "Richard", "Hendricks", 11, 101),
(121, "Erlich", "Bachman", 12, 101),
(201, "Monica", "Hall", 20, 101),
(301, "Jared", "Dunn", 30, 121),
(401, "Bertram", "Gilfoyle", 40, 111),
(411, "Dinesh", "Chugtai", 41, 401);
