const mysql = require("mysql");
const inquirer = require("inquirer");
const questions = require("./questions");
const connection = require("./resources/connection");



function qStart () {
inquirer.prompt(questions.main).then(res => {
 if(res.choose === "View all employees"){

 }
 if(res.choose === "View all employees by role") {

}
if(res.choose === "View all employees by department"){

}

if(res.choose === "View all employees by manager") {

}
if(res.choose === "Add employee"){

}
if(res.choose === "Add role"){

}
if(res.choose === "Add department"){

}
if(res.choose === "Update employee role"){

}
if(res.choose === "Update employee manager"){

}
if (res.choose === "Delete employee"){

}
if(res.choose === "Delete role"){

}
if(res.choose === "Delete department"){

}
if(res.choose ===  "View department budgets"){

}
if(res.choose === "Exit"){

connection.end();
}

});

}


const viewEmp = () => {


}



