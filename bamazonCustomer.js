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
    displayItems();
    
});

function displayItems() {
    connection.query("SELECT item_id, product_name, price FROM products", function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log("-------------------------------------------------------------------------------");
            console.log("Product ID: " + res[i].item_id + " || Product Name: " + res[i].product_name + " || Price: $" + res[i].price);
            console.log("-------------------------------------------------------------------------------");
        }
        getPrice();
    });

    
    function getPrice(){
        inquirer
            .prompt({
                
                    name: "choice",
                    type: "input",
                    message: "What is the ID number of the product that you would like to buy?"
                
                //{
                // name: "amount",
                //type: "input",
                //message: "How many units of the product would you like to buy?"
                //}
            })
            .then(function (answer) {
                var query = "SELECT price FROM products WHERE ?";
                //Choice below comes from name above, the prompt is an object
                connection.query(query, { item_id: answer.choice }, function (err, res) {
                    for (var i = 0; i < res.length; i++) {
                        console.log("Price: " + res[i].price);
                        
                    }
                    });
                    
                });
            }
        }

    
            






