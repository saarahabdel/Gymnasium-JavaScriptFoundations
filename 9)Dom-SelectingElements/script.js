document.addEventListener("DOMContentLoaded", function() {

    var btn = document.getElementById("btn");

    btn.addEventListener("click", function() {
        alert("Hello, world");
    });

});

// getElementsByClassName returns an array of elements (rather, an array-like object)

document.addEventListener("DOMContentLoaded", function() {

    var elems = document.getElementsByClassName("first_paragraph");

    for(var i = 0; i < elems.length; i++) {
        elems[i].style.backgroundColor = "red";
    }

});


document.addEventListener("DOMContentLoaded", function() {

    var elems = document.getElementsByTagName("li");

    for(var i = 0; i < elems.length; i += 2) {   // +=2 will give us reference to every other element
        elems[i].style.backgroundColor = "red";
    }

});


document.addEventListener("DOMContentLoaded", function() {

    var elem = document.querySelector("p span.exciting");

    elem.style.backgroundColor = "red";

});

