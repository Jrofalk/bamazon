var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Tomiko101387",
    database: "bamazon_DB"
});


connection.connect(function (err) {
    if (err) throw err;
    purchaseItem();
});

function purchaseItem() {
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "Welcome to Bamazon",
            choices: [
                "What is the ID of the product that you would like to buy?",
                "How many units would you like to buy?"
            ]
        })
}