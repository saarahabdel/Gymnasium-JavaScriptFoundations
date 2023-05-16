/** EVENTS
 * 
 * You listen for events.
 * 
 * You handle them when they occur, by executing a function.
 * 
 */

// Example:

// document.addEventListener("click", onClick);

// function onClick(event) {
//     doSomething();
// };


/**
 * document: element in HTML file
 * 
 * addEventListener: a method that exists on any element object
 * - it has two parameters 
 * (1) the event that you want to listen to
 * (2) specifies a function that will be called when that event occurs
 * 
 * parameter of function '(event)', contains specific info about the event that just occured. Eg. for a keyboard click, the specified key will be in the parameter , eg. (h)
 * 
 */

// Event listeners are often written like this:  (with an anonymous function)
// document.addEventListener("click",function(event) {
//     doSomething();
// });

/** COMMON EVENTS
 * 
 * mousedown
 * mouseup
 * mousemove
 * click
 * keydown
 * keyup
 * 
 */ 

// document.addEventListener("mousedown", function(event) {
//     console.log("mouse down. x: " + event.clientX + ", y: " + event.clientY);   // use event parameter to get current x and y position of mouse
// });

// document.addEventListener("mousemove", function(event) {
//     console.log("mouse move. x: " + event.clientX + ", y: " + event.clientY);   // use event parameter to get current x and y position of mouse
// });

// document.addEventListener("keydown", function(event) {
//     console.log("key down: " + event.keyCode);   // appending keyCode property of the event object
// });
// logs a number for each key that is pressed. Its an integer that represents which key was pressed(number is generally the same as the ascii code of that key)
// String.fromCharCode(event.keyCode) --> converts the keycode to the actual key getting pressed

document.addEventListener("keydown", function(event) {
    console.log("key down: " + String.fromCharCode(event.keyCode));   // appending keyCode property of the event object
});


