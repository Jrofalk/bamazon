# "Bamazon" Application

"Bamazon" is an application that acts as a storefront for a set of products. Information regarding these products is stored within a MySQL database. Bamazon takes in orders from a user and then depletes the stock recorded in said database.

# Directions:

A user is presented with a list of the items available for purchase.

![](https://github.com/Jrofalk/bamazon/blob/master/Images/items.PNG)

The user is then prompted to enter the ID number of the product they are interested in purchasing, as well as the quantity.

![](https://github.com/Jrofalk/bamazon/blob/master/Images/user-questions.PNG)

After entering this information, Bamazon notifies the user of the cost of the product(s) they are purchasing. If that product is not available for purchase in a given quantity, they are informed that there is insufficient stock. Availablity of items is stored and updated within MySQL.

![](https://github.com/Jrofalk/bamazon/blob/master/Images/total-cost.PNG)

## Bamazon was built using the following technologies:

* JS
* Node.js
* MySQL
* NPM Packages, including Inquirer and MySQL
