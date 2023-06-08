# CRUDS-JS
Product Management System (Using Vanilla  Javascript)
# Dependencies
- Realtime Search
- Localstorage
- Regular Expression
# Technologies 
- Javascript NAtive Code
- Boorstrap5
- CSS3
- Html5
# Features
- Create New Product
- Search By Title
- Search By Category
- Delete All Products
- Update Product To Edit
# Demo
<a href="https://ahmedeid1998.github.io/CRUDS-JS/">CRUDS System</a>

# Overview
- Unfortunately, this is not responsive to all screens.
- You can see animation box in left of screen and another in the right
   <br>🔶 when you hover over any box , it will stop moving
   <br>🔶 which in the left , desplay how many products do you own in your system
   <br>🔶 which in the right , show you can enter your data but when you break the REGEX  rules ,it will desplay a warning message ❗🚫

- There is a function to calculate the final price and show it in a green mark below the ads and discount inputs in the form

- When you press on any (update) button of row in the table , the site will go up smoothly , it will upload the data for that row into the form for editing , the count input will disapeare and the (Create) button will change to (Update)

- When you press on any (Delete) button of row in the table , This product will be removed from the system

- The (Delete All) button also displays how many products are in the system

- You can search for any product in the table using product title by pressing the (Search By Title) button OR using product category by pressing the (Search By Category) button before entering the search text

- You can delete all products from the table with one click on the (Delete All) button .. but the (Delete All) button will disappear because there are no products here, and it will appear when there are products that can be deleted

- I used Regular Expression (REGEX) and these are the rules 👇 ...
<br>🔷 The first letter of product title and product category must be capital letter
<br>🔷 You must enter a positive number in the price , taxse , ads , and discount inputs
<br>🔷 But you can leave the count input empty or enter zero or one , in any of these possibilities that will create one product
