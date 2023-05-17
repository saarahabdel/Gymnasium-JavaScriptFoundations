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

// function validateInput(value, input) {

//     if(isNaN(value)) {

//         input = "red";
//         return;
//     }
//     else {
//         input = "initial";
//     }
// }
// function isNumber(n) {
//     return !isNaN(parseFloat(n)) && !isNaN(n - 0)
//   }
  
var distanceInput = document.getElementById("distance"),
    hoursInput = document.getElementById("hours"),
    minutesInput = document.getElementById("minutes"),
    secondsInput = document.getElementById("seconds"),
    calculateBtn = document.getElementById("calculate_btn"),
    paceText = document.getElementById("pace");

calculateBtn.addEventListener("click", function() {

    function validateInput(value, input) {

        if(isNaN(value)) {
    
            input.style.borderColor = "red";
            return;
        }
        else {
            input.style.borderColor = "initial";
        }
    }
    validateInput();

    var miles = parseFloat(distanceInput.value),
        hours = parseFloat(hoursInput.value),
        minutes = parseFloat(minutesInput.value),
        seconds = parseFloat(secondsInput.value);
        
        // added to check if a user input words instead of a number value
        
        
        

    var totalMinutes = hours * 60 + minutes + seconds / 60,
        pace = totalMinutes / miles;
        paceMinutes = Math.floor(pace),
        paceSeconds = Math.round((pace - paceMinutes) * 60);

    if(paceSeconds < 10) {
        paceSeconds = "0" + paceSeconds;
    }   // so that it wont say 9.5 minutes. rather 9.05 minutes
        
    paceText.textContent = "You need to run " + paceMinutes + ":" + paceSeconds + " minutes per mile";    
});



