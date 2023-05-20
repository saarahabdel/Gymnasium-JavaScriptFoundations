var template = document.getElementById("template").innerHTML;

var data = {
	firstName: "Bob",
	lastName: "Smith"
};

var html = Mustache.render(template, data);

var div = document.createElement("div");
div.innerHTML = html;
document.body.appendChild(div);