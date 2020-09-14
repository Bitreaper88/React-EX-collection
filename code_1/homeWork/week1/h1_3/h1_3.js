const readline = require("readline-sync");
const number = readline.question("Input number: ");

if (number < 0 ) {
    console.log("Error: Number is negative");
}
else {
    console.log("Square root for number " + number + " is " + Math.sqrt(number));
}
