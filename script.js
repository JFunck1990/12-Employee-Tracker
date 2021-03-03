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

 const viewEmpDep = (res) => {
     console.log("You are Viewing Employees By Department");

     const query = "SELECT employee.first_name, employee.last_name, department.name As Department FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id ORDER BY employee.id"

     //const query = "SELECT * FROM Department";

connection.query(query, (err, data) => {
    if(err) throw err;
    console.table(data);
    qStart();
});
 }


   const addEmp = () => {
    connection.query("SELECT * FROM role", function(err, res) {
      if (err) throw err;

      inquirer
        .prompt([
          {
            type: "input",
            name: "firstName",
            message: "What is the first name of the employee?"
          },
          {
            type: "input",
            name: "lastName",
            message: "What is the last name of the employee?"
          },
          {
            type: "list",
            name: "role",
            message: "what role does this employee have?",
            //loops and displays all existing roles for selection
            choices: function() {
              let roleArr = [];
              for (let i = 0; i < res.length; i++) {
                roleArr.push(res[i].title);
              }
              return roleArr;
            }
          },
          {
            type: "number",
            name: "manager",
            message: "What is the id number of the manager?"
          }
        ])
        .then(function(answers) {
          //loops through the original response, this time comparing the title of the position with the selected title from the inquirer. When a match is found, grabs the role ID from the res object.
          let roleID;
          for (let j = 0; j < res.length; j++) {
            if (res[j].title == answers.role) {
              roleID = res[j].id;
            }
          }
          //adds the new employee to the employees table, display the new employee table, launches "next" function.
          connection.query(
            "INSERT INTO employee SET?",
            {
              first_name: answers.firstName,
              last_name: answers.lastName,
              role_id: roleID,
              manager_id: answers.manager
            },
            function(err, res) {
              if (err) throw err;
              console.log("here are all the current employees: ");
              viewEmployees();
            }
          );
        });
    });
  };


const addRole = (res) => {

    connection.query(query, (err, data) => {
        if(err) throw err;
        console.table(data);
        qStart();
    });
}

const addDep = (res) => {
    console.log("You are adding a Department.")
    inquirer.prompt(questions.depAdd).then(res => {




        connection.query(query, (err, data) => {
            if(err) throw err;
            console.table(data);
            qStart();
        })


    });
}

 const upEmpRole = (res) => {
 const query = connection.query
    connection.query(query, (err, data) => {
        if(err) throw err;
        console.table(data);
        qStart();
    });
 }


qStart();
