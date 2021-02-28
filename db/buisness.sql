drop database if exists employees_db;

create database employees_db;

use employees_db;

create table department (
id int not null auto_increment,
name varchar(50) not null,
primary key(id)
);

create table  roles (
id int not null auto_increment,
title varchar(50) not null,
salary decimal (9,2) not null,
department_id int not null,
primary key(id)
);

create table employee (
id int not null auto_increment,
first_name varchar(50) not null,
last_name varchar(50) not null,
role_id int not null,
primary key(id)
);