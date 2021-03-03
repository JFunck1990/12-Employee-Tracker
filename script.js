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

      inquirer.prompt([
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

          let roleID;
          for (let j = 0; j < res.length; j++) {
            if (res[j].title == answers.role) {
              roleID = res[j].id;
            }
          }

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
              viewEmp();
                qStart();
            }
          );
        });
    });
  };


    const addRole = (res) => {
        connection.query("SELECT * FROM department", function(err, dres) {
        if (err) throw err;
        console.log(dres);

        inquirer.prompt([
            {
              type: "input",
              name: "roleName",
              message: "What is the name of the role you would like to add?"
            },
            {
              type: "input",
              name: "pay",
              message: "How much does this role pay?"
            },
            {
              type: "list",
              name: "depName",
              message: "Which department would you like to add the role to?",
              choices: function() {
                let depArr = [];
                for (let i = 0; i < dres.length; i++) {
                  depArr.push(dres[i].name);
                }
                return depArr;
              }
            }
          ]).then(function(answers) {

            let depID;
            for (let j = 0; j < dres.length; j++) {
              if (dres[j].name == answers.depName) {
                depID = dres[j].id;
              }
            }

            connection.query(
              "INSERT INTO role SET ?",
              {

                title: answers.roleName,
                salary: parseInt(answers.pay),
                department_id:parseInt(depID)
              },
              function(err, res) {
                if (err) throw err;
                console.log("here are all the current roles: ");
                viewEmpRole();
                qStart();
              }
            );
          });
      });
    };



   const addDep = () => {
        inquirer.prompt([
            {
              type: "input",
              name: "newDep",
              message: "What is the name of the department?"
            }
          ])
          .then((res) => {
             connection.query(
              "INSERT INTO department SET ?",
              {
                name: res.newDep
              },
              function(err, res) {
                if (err) throw err;
                console.log("here are all the current departments: ");

                qStart();
              }
            );
          });
         };

        //  function viewAllDep (){
        //     connection.query("SELECT * FROM department", function(err, dres) {
        //         if (err) throw err;
        //         console.log(dres);
        //     });
        //  }



 const upEmpRole = (res) => {
    const query = "SELECT * FROM ROLE";
    connection.query(query, (err, results)=> {
        if (err) throw err;

        inquirer.prompt([
            {
                name: "employee",
                type: "list",
                choices: function (){
                    let choiceArr = results[0].map(choice => choice.full_name);
                    return choiceArr;

                },
                message: "Select a Employee to update their Role."
            },
            {
                name: "newRole",
                type: "list",
                choices: function () {
                    let choiceArr = results[1].map(choice => choice.title);
                    return choiceArr;
                },


            }
        ]).then((answer) => {
            connection.query(`UPDATE employee
            SET role_id = (SELECT id FROM role WHERE title = ?)
            WHERE id = (SELECT id FROM(SELECT id  FROM employees WHERE CONCAT(first_name, " ", last_name)=?)AS tmptable)`, [answer.newRole, answer.employee], (err, results) => {
                if (err) throw err;

                viewEmpRole();
                qStart();
            });
        });
    })
 };


qStart();
