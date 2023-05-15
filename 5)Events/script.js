/** EVENTS
 * 
 * You listen for events.
 * 
 * You handle them when they occur, by executing a function.
 * 
 */

// Example:

document.addEventListener("click", onClick);

function onClick(event) {
    doSomething();
};


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
document.addEventListener("click",function(event)) {
    doSomething();
};

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