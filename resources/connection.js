const mysql = require("mysql");

const connection = mysql.createConnection ({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "1234567",

    database: "employees_db"

});


connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);

  
});

module.exports = connection;
