// Write a program that listens for a keyup event. In the handler, check which key was released. If it was
// “Y”, log the word “Yes”. If it was “N” log the word “No”. If it was any other key, log, “I don’t understand.”


document.addEventListener("keyup", function(event) {

    if(String.fromCharCode(event.keyCode) === "Y") {

        console.log("Yes");
    } 
    else if((String.fromCharCode(event.keyCode)) === "N") {

        console.log("No");
    }
    else {

        console.log("I don't understand");
    }

});