const mysql = require("mysql");
const inquirer = require("inquirer");
const questions = require("./questions");
const connection = require("./resources/connection");
const consTable = require("console.table");



function qStart () {
inquirer.prompt(questions.main).then(res => {
    console.log( "This is res.choose:" + res.choose);
 switch(res.choose ) {
    case "View all employees":
    viewEmp();
    break

    case  "View all employees by role":
     viewEmpRole();
    break;

    case "View all employees by department":
    viewEmpDep();
    break;

    case "View all employees by manager":
    viewEmpMan();
    break;

    case "Add employee":
    addEmp();
    break;

    case "Add role":
    addRole();
    break;

    case "Add department":
    addDep();
    break;

    case "Update employee role":
    upEmpRole();
    break;

    case "Update employee manager":
    upEmpMan();
    break;

    case "Delete employee":
    delEmp();
    break;

    case "Delete role":
    delRol();
    break;

    case "Delete department":
    delDep();
    break;

    case "Exit":
    connection.end();
    break;

    default:
    console.log(`Invalid action: ${res.choose}`);
    break;
}
 });

}


const viewEmp = (res) => {
    console.log("Viewing Employees")
const query = "SELECT employee.first_name, employee.last_name, role.title, role.salary, department.name, CONCAT(e.first_name, ' ' ,e.last_name) AS Manager FROM employee INNER JOIN role on role.id = employee.role_id INNER JOIN department on department.id = role.department_id left join employee e on employee.manager_id = e.id;";

connection.query(query, (err, data) => {
    if(err) throw err;
    console.table(data);
    qStart();
});
}

 const viewEmpRole = (res) => {
     console.log("Viewing Employees by Role");
     const query = "SELECT employee.first_name, employee.last_name, role.title AS Title FROM employee JOIN role ON employee.role_id = role.id";

    connection.query(query, (err, data) => {
        if(err) throw err;
        console.table(data);
        qStart();
    });
 }

 const  viewEmpDep = (res) => {
     const query = ""

connection.query(query, (err, data) => {
    if(err) throw err;
    console.table(data);
    qStart();
});
 }




qStart();
