// What happens when an html page loads?

console.log("window: " + window);
console.log("document: " + document);
console.log("document.head: " + document.head);
console.log("document.title: " + document.title);
console.log("document.body: " + document.body);

// jQuery
// - has a built in way of adding a listener for the DOM content loaded event
// if a feature is not available in a broswer, jQuery would work around that to get a similar feature working

$(document).ready(function() {

    console.log("Ready!");
});

// $ - single letter variable representing jQuery library