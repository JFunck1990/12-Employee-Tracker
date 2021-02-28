use employees_db;
-- department --
insert into department ( name) values("Sales");
insert into department ( name) values("Engineering");
insert into department (name) values("Finance");
insert into department (name) values("Legal");
insert into department (name) values("Marketing");

select * from department;

insert into roles (title, salary, department_id) values
("Sales Asociate", 35000, 1),
("Eletrical Engineer", 70000, 2),
("Acountant", 90000, 3),
("Lawer", 120000, 4),
("Markiting Assistant", 50000, 5);

select * from roles;

insert into  employee (first_name, last_name, role_id) values
("Jack", "Funck", 1),
("John", "Doe", 2),
("Luke", "Smith", 3),
("Mary", "Mack", 4),
("Harry", "Potter", 5);

select * from employee;