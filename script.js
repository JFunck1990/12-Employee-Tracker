const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = ({
    host: "localhost",

    port: 3306,

    password: "1234567",

    database: "employees_db"

});

connection.connect((err) => {
    if (err) {
        throw err;
    }
    console.log(`connected as id ${connection.threadId}`);
});



