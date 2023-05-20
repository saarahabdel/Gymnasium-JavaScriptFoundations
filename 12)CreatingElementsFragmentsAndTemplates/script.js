var list = document.querySelector("ul");

// list.innerHTML = <li>List item 1</li>
// ths would add the list item to the list but also wipe out all the original list items

// better solution
// create new element object and add that to the page:

// var item = document.createElement("li");
// item.textContent = "List item 4";
// list.appendChild(item);

// How to insert an element between two others:
var item = document.createElement("li");
item.textContent = "List item 2.5";

// Insert Before Method:
// element.insertBefore(newElement, referenceElement);
// first param is the element you want to insert
// second param answers the question "before what?", we need to get this element:

var items = list.getElementsByTagName("li");
// get the list item elements that exist as children of the list element
// this method will return an array of list item element objects

var refItem = items[3];
list.insertBefore(item, refItem);

