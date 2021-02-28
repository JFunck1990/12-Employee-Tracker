const main =[
    {
        name: "choose",
        type: "list",
        message: "Welcome to Employee Tracker, What would you like to do?",
        choices: [
        "View all employees",
        "View all employees by role",
        "View all employees by department",
        "View all employees by manager",
        "Add employee",
        "Add role",
        "Add department",
        "Update employee role",
        "Update employee manager",
        "Delete employee",
        "Delete role",
        "Delete department",
        "Exit"
    ]
    },
];

module.exports = {
    main
}