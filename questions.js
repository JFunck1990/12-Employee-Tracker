
//Starting promte
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
// Adding Employee
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
  choices: []

},
{
  name: "department",
  type: "list",
  message: "what is their department?"
},

 {
     name: "manager",
     type: "list",
     message: "Who is their manager name?",
     choices: ["need to figure out"]
 }

];

//DELETE


// Adding department
const depAdd = [
    {
        name: "name",
        type: "input",
        message: "What department would you like to add?"
    }
];



module.exports = {
    main,
    empAdd,
    depAdd,
}