// Create a JavaScript object named “user” that has properties firstName, lastName, email, and populate those with your own name and email.
// Write a function that takes this user object as a parameter and logs that user’s info to the console.

// Something like:
// logUserInfo(user);

// should log something like “John Smith:jsmith@company.com”

const user = { firstName: "Saarah",
               lastName: "Abdelmaged",
               email: "saarahabdel15@gmail.com"
            };


function logUserInfo(user) {

    console.log(user.firstName + " " + user.lastName + ":" + user.email)
}; 

logUserInfo(user);

