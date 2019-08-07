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
    //Create function here that displays all bamazon items first. purchase Item will probably have to be outside of this function.
    //reference topsongcode.js under top 5000 code
    displayItems();
    //purchaseItem();
});

function displayItems() {
    connection.query("SELECT item_id, product_name, price FROM products", function(err, res) {
        if (err) throw err;
        for(i=0; i<res.length; i++){
            console.log("-------------------------------------------------------------------------------");
            console.log("Product ID: " + res[i].item_id + " || Product Name: " + res[i].product_name + " || Price: $" + res[i].price);
            console.log("-------------------------------------------------------------------------------");
        }
        connection.end();
    })
}

//function purchaseItem() {
    //inquirer
        //.prompt({
            //name: "action",
            //type: "list",
            //message: "Welcome to Bamazon",
            //choices: [
                //"What is the ID of the product that you would like to buy?",
                //"How many units would you like to buy?"
            //]
       // })
//}