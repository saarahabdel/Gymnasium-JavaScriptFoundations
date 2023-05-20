/** WHERE TO START?
 * 
 * Ask which values/objects are we going to need throughout the programme 
 * 
 * What we will need:
 * 1) Template data 
 * 2) The div that holds the form
 * 3) The empty div where we'll eventually place the preview 
 * 4) The preview button
 * 
 */

var template = document.getElementById("template").innerHTML, // moustache template
    form = document.getElementById("form"),
    preview = document.getElementById("preview"),
    previewBtn = document.getElementById("previewBtn");

fillForm();    


/** THINK OF WHAT ACTIONS ARE GOING TO NEED TO HAPPEN
 * 
 * I know when the user clicks the button, I need all the data from the form
 * and then use moustache to render the data with that template
 * 
 * 1) To get the data, we need to access all form elements by their ID's and then 
 *    get the value of each one
 * 2) Rather than getting each element by ID multiple times we'll create a function
 *    called getValue()
 *    To get the value of firstname we'll write getValue(firstname)
 * 
 * We want a way to fill in the form programatically for testing purposes 
 * So, we need a way to set values for all the elements
 * 1) Create another function called setValue()
 * 2) Will take id and value as parameters and set value of the element with that id
 * 3) This allows us to make a fucntion that would fill the entire form automatically 
 *    for testing purposes 
 * 4) The fillForm() function will supply default test values for all the test fields 
 *    while working on the app
 * 
 */

function getValue(id) {
    return document.getElementById(id).value;
}

function setValue(id, value) {
    document.getElementById(id).value = value;
}
function fillForm() {
    setValue("title", "Mr.");
    setValue("firstName", "Bob");
    setValue("lastName", "Smith");
    setValue("address", "123 Main St.");
	setValue("address2", "Apt. 2");
	setValue("city", "Boston");
	setValue("state", "MA");
	setValue("zip", "02115");
	setValue("email", "bsmith@example.com");
	setValue("website", "www.example.com");
	setValue("interests", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur sagittis facilisis. Sed libero tortor, ultrices ut porttitor id, lacinia at odio. In lobortis scelerisque ligula, vitae molestie magna accumsan ac. Proin fringilla, tortor quis convallis condimentum, libero metus tempor orci, nec dignissim nisi lectus a ante. Maecenas vitae sollicitudin massa, nec ultricies felis. Suspendisse id purus et sem condimentum accumsan. Mauris id odio cursus, sollicitudin nisi id, sollicitudin lacus.");
	setValue("experience", "Donec rutrum interdum dolor, eget semper dolor mattis eget. Aenean interdum ligula vitae malesuada porta. Phasellus lobortis congue fermentum. Duis nec egestas nisl. Nunc sit amet diam ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras euismod aliquam leo, nec blandit leo commodo non.");
}

/** ONE MORE FUNCTION
 * 
 * We need one more function that will grab all the values from those fields and 
 * use them to populate a data object that can be used with the template.
 */

function getFormData() {
    return {
        title: getValue("title"),
		firstName: getValue("firstName"),
		lastName: getValue("lastName"),
		style: getValue("style"),
		address: getValue("address"),
		address2: getValue("address2"),
		city: getValue("city"),
		state: getValue("state"),
		zip: getValue("zip"),
		email: getValue("email"),
		website: getValue("website"),
		interests: getValue("interests"),
		experience: getValue("experience"),
		style: getValue("style")
    };
}

/** ADD EVENT LISTENER
 * 
 * Now we need to tie everything together for when the user clicks the button
 * 1) Add a click listener to the preview button
 * 2) Then we'll call getFormData, storing that object in a variable called data 
 * 3) We'll then use the template plus this data in a call to Mustache.render 
 *    The result of that will be a string stored in a variable called 'html'
 * 4) We can then assign the string of 'html' to the preview div's inner HTML
 * 
 * 5) Lastly, we'll remove the form so that we can see the result clearly
 *    All that's left is the preview with the populated template
 * 
 */

previewBtn.addEventListener("click", function(){
    var data = getFormData(),
        html = Mustache.render(template, data);

    preview.innerHTML = html;
    document.body.removeChild(form);   
});
