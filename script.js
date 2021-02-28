const mysql = require("mysql");
const inquirer = require("inquirer");
const questions = require("./questions");
const connection = require("./resources/connection");


console.log( "This is questions: "+ questions.main.choose);

// connection.query("select * from department", (err, data) => {
//     if (err){
//       throw err;
//     }
//     console.log(data);
//     connection.end();
//   })

function qStart () {
inquirer.prompt(questions.main).then(res => {
switch (res.main) {


}

});

}



