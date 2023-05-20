// How to remove an element:

list.removeChild(listItem);
// method must be called on the parent element that contains the child element you wanna remove

var list = document.querySelector("ul");
var item = document.querySelector("li");
list.removeChild(item);

// ---------------------------------------------------------------------------- //

var heading = document.querySelector("h1");
list.removeChild(heading); // returns an error bc h1 element is not a child in the list

// ---------------------------------------------------------------------------- //

heading.parentElement.removeChild(heading);
// headings parent is the documents body
// removeChild method will return the element that was removed

// ---------------------------------------------------------------------------- //

// Both select and remove the remaining h1 tag:
var heading = document.body.removeChild(document.querySelector("h1"));

p.appendChild(heading);
// h1 element is now a child of the first paragraph

// ---------------------------------------------------------------------------- //

// You dont have to remove the element first before repositiong it 
document.body.appendChild(heading);
// automatically removed from previous parent and appended to the new parent (the body in this case)

// ---------------------------------------------------------------------------- //

// ACCESSING AND REFERENCING VARIOUS CHILD ELEMENTS
var list = document.querySelector("ul");
list.childNodes;

list.children; // will only return elements, not nodes (only return list items)

list.firstChild
list.lastChild  // these will return the first and last NODES

list.firstElementChild
list.lastElementChild // these will return the first and last ELEMENTS



var item = list.children[3];
item.nextSibling
item.previousSibling  // these will return NODES 

item.nextElementSibling
item.previousElementSibling // these will return ELEMENTS

item.parentNode     // returns NODE
item.parentElement  // returns ELEMENT


