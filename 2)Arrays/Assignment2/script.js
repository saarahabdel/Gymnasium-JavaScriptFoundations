/**
 * Create an array containing the names of the 12 months of the year - “January” through “December”.
 * Create a function called getMonthName that takes a single number as a parameter and returns the
 * name of that month. For example:  console.log(getMonth(3));
 * this should log “March”
 * Remember that arrays are indexed starting with 0, but here, month 1 should be January. So you’ll
 * have to account for that somehow.
 * 
 */

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function getMonthName(monthNumber) {
    return months[monthNumber - 1];
  }

console.log(getMonthName(3));



