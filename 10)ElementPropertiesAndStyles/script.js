// selection methods give us back JavaScript objects that represent HTML elements
// objects can have properties that have values and methods which are functions which can be called to perform actions


var item = document.querySelector("li");

item.textContent = "Thing One";

var list = document.querySelector("ul");

list.textContent = "I am a list"; // list items will disappear

// Creating new elements and adding them
list.innerHTML = "<li>List Item One</li><li>List Item Two</li>";


// The 'style' property
var firstHeading = document.querySelector("h1");
firstHeading.style.fontFamily = "Arial";

firstHeading.style.fontSize = "48px";

firstHeading.style.color = "rgb(0, 225, 0)";




