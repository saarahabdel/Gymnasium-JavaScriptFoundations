// OBJECTS ATTACHED TO FUNCTIONS

// An object method: just a function
// var messenger = {};                 // created a messenger object
// messenger.sayHello = function() {   // created a new property called sayHello
//     console.log("Hello.");          // We then assigned a function to that           // An anonymous function has no name 
// };                                  

// functions that are attached to objects like this are called METHODS



// var messenger = {};
// messenger.sayHello = function() {
//     console.log("Hello.");
// };

// call the function by saying:
// messenger.sayHello();

/** Object Methods that we use all the time:
 * 
 * same as: console.log(message);
 * Math.random();
 * message.substring(0,4);
 * 
 */

// 'console' and 'Math' are built in Object Methods
// 'log' and 'random' are methods of the above objects, they're just functions   


// You can also create the method when you create the object:
// var messenger = {
//     sayHello: function() {
//         console.log("Hello.");
//     }
// };


// Object methods are able to access the object they're attached to with the keyword: 'this'

var messenger = {

    greeting: "Hello",
    name: "everyone",

    sayHello: function() {
        console.log(this.greeting + ", " + this.name + "!");  // this.greeting = messenger.greeting
    }

};

// After creating the messenger object we can change its properties
messenger.greeting = "Konnichiwa";
messenger.name = "minisan";
messenger.sayHello();




