// Basic syntax of function

function sayHello() {
    console.log("Hello");
}
sayHello();


// Passing data through a function
function sayHello(name) {            // name is a parameter
    console.log("Hello, " + name);   // name is a variable only available to the body of this function
}
sayHello("Tracey");   // returns Hello Tracey


// Two parameters 
function sayHello(name, useAlert) {

    if(useAlert) {
        alert("Hello, " + name);
    } 
    else {
        console.log("Hello, " + name);
    }
}

sayHello("Tracey");  // will output to console, bc useAlert is undefined
// sayHello("Tracey", true) // will output as an alert


// A function can send data back to the line of code that called it

// var rand = Math.random();
// console.log(rand);

// A function returns a value with the return keyword

function doSomething() {
    return "something";
}


// Example:
function randomInt(max) {
    var rand = Math.random() * max;
    rand = Math.round(rand); // rounds value of the rand variable and stores the result back in rand
    return rand;

}
console.log(randomInt(100));
// variables declared inside a function are local variables. They dont exist outside the function block.
// above, the scope of the 'rand' variable is the randomInt function

console.log(rand);    // will return "rand is not defined"

