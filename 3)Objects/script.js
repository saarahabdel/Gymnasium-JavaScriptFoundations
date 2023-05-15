// OBJECTS WITHIN ARRAYS

// Similar to an array you can create an empty object
var person = {};

// You can add properties to an object 
person.firstName = "Sam";
person.lastName = "Spade";

// Can use object properties like any other variable 
console.log(person.firstName + " " + person.lastName);

var items = [];

/**var item = {};
item.name = "hammer";
item.cost = 9.99;
item.id = 101;
item.picture = "hammer.jpg";
*/

// can also write the above as:
/**var item = {
    name: "hammer",
    cost: 9.99,
    id: 101,
    picture: "hammer.jpg",
};

items.push(item);   // push the object onto the array 
*/

/**function listItems() {
    for(var i = 0; i < items.length; i++) {

        console.log(items[i] + " is $" + costs[i]); // i will be zero at first so "hammer" will be logged

    }
}
listItems();
*/


// Example: 

// can also have objects in an array without having to push them:
var items = [
    { 
        name: "hammer",
        cost: 9.99,
        id: 101,
        picture: "hammer.jpg",

    },
    { 
        name: "screwdriver",
        cost: 4.99,
        id: 102,
        picture: "screwdriver.jpg",

    },
    { 
        name: "saw",
        cost: 12.99,
        id: 103,
        picture: "saw.jpg",

    },

];

function listItems() {
    for(var i = 0; i < items.length; i++) {
        console.log(items[i].name + " is $ " + items[i].cost + "."); // bc each item is an object now, rather than just a string, we need to specify which property we want to log
    }
}

listItems();




