const mysql = require("mysql");
const inquirer = require("inquirer");
const questions = require("./questions");
const connection = require("./resources/connection");
const consTable = require("console.table");

qStart();

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




const viewEmp = (res) => {
const query = "";

connection.query(query, (err, data) => {
    if(err) throw err;
    console.table(data);
    qStart();
});
}


}
