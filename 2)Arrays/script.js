// Create an Array

var list = [];

// Elements in an array can be assigned values 

list[0] = "socks";
list[1] = "shirt";
list[2] = "shoes";

// console.log(list[1]);

/** Example 1

var item0 = "hammer",
    item1 = "screwdriver",
    item2 = "saw";

function listItems() {
        console.log(item0);
        console.log(item1);
        console.log(item2);
    }
*/      
    

/** Example 2 

var items = [];
items[0] = "hammer";
items[1] = "screwdriver";
items[2] = "saw";

function listItems() {
    console.log(items[0]);
    console.log(items[1]);
    console.log(items[2]);
}
*/

/** Example 3
var items = ["hammer", "screwdriver", "saw", "chisel", "vise", "wrench", "pliers", "knife"];
*/

// Simple for loop
// for(var i = 0; i < 10; i++) {
//     console.log(i);               // returns all items in the array
// }

/** Example 4 */
var items = ["hammer", 
             "screwdriver", 
             "saw", 
             "chisel", 
             "vise", 
             "wrench", 
             "pliers", 
             "knife"];

items.push("paintbrush");
items.push("awl", "scraper", "dropcloth");
items.sort(); // will sort items alphabetically             

function listItems() {
    for(var i = 0; i < items.length; i++) {

        console.log(items[i]); // i will be zero at first so "hammer" will be logged

    }
}
listItems();           



