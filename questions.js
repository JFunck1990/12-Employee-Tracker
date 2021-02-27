const main =[
    {
        name: "coice",
        type: "list",
        message: "What would you like to do?",
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
        "View department budgets"]
    },
];

module.exports = {
    main
}