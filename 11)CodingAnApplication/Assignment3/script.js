/** Number three, in the sample application we created, we’re
validating each numeric property and setting the border
style of the input related with it. Try creating a new
function in that project called “validateinput.” It should take a
number value in a text input element as parameters.
Now, fill in the body of that function, so that it performs the
same action as the original code. Replace each original if/
else statement with a call to that new function. See
how this makes the overall code smaller, and easier to read.
*/

var distanceInput = document.getElementById("distance"),
	hoursInput = document.getElementById("hours"),
	minutesInput = document.getElementById("minutes"),
	secondsInput = document.getElementById("seconds"),
	calculateBtn = document.getElementById("calculate_btn"),
	paceText = document.getElementById("pace");

// function validateInput(value, input) {

//     if(isNaN(value)) {

//         input.style.borderColor = "red";
//         return
//     }
//     else {
//         input.style.borderColor = "initial";
//     }
// }
// above code is supposed to replace the if else statements below
calculateBtn.addEventListener("click", function() {
	var miles = parseFloat(distanceInput.value),
		hours = parseFloat(hoursInput.value),
		minutes = parseFloat(minutesInput.value),
		seconds = parseFloat(secondsInput.value);

	if(isNaN(miles)) {
		distanceInput.style.borderColor = "red";
		return;
	}
	else {
		distanceInput.style.borderColor = "initial";
	}
	if(isNaN(hours)) {
		hoursInput.style.borderColor = "red";
		return;
	}
	else {
		hoursInput.style.borderColor = "initial";
	}
	if(isNaN(minutes)) {
		minutesInput.style.borderColor = "red";
		return;
	}
	else {
		minutesInput.style.borderColor = "initial";
	}
	if(isNaN(seconds)) {
		secondsInput.style.borderColor = "red";
		return;
	}
	else {
		secondsInput.style.borderColor = "initial";
	}

	var totalMinutes = hours * 60 + minutes + seconds / 60,
		pace = totalMinutes / miles,
		paceMinutes = Math.floor(pace),
		paceSeconds = Math.round((pace - paceMinutes) * 60);

	if(paceSeconds < 10) {
		paceSeconds = "0" + paceSeconds;
	}

	paceText.textContent = "You need to run " + paceMinutes + ":" + paceSeconds + " minutes per mile";
});