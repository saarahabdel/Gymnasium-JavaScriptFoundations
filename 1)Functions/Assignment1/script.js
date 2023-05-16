// Fill in the body of the following function:


function containsString(mainString, searchString) {

    if(mainString.includes(searchString)) {
        return true;
    }
    else {
        return false;
    };

}

// This function should return a value of true if searchString is part of mainString, and false if it is not.


// Test it with these lines of code:


console.log(containsString("independent", "depend"));
// this line should log true


console.log(containsString("independent", "indy"));
// this line should log false

// Hint: use the indexOf method.

