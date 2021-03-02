const main =[
    {
        name: "choose",
        type: "list",
        message: "Welcome to Employee Tracker, What would you like to do?",
        choices: [
        "View all employees",
        "View all employees by role",
        "View all employees by department",
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
    }

];

const empAdd = [

{
  name:"firstname",
  type: "input",
  message: "Enter the First Name"
},
{
  name: "lastname",
  type: "input",
  message: "Enter the Last Name"
},
{
  name: "role",
  type: "list",
  message: "What is their role?",
  choices: ["Need to figure out how to add roles in to prompt"]
},
 {
     name: "manager",
     type: "list",
     message: "What is their manager name?",
     choices: ["need to figure out"]
 }

]



module.exports = {
    main,
    empAdd,
}