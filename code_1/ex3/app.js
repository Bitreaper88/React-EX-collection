const readline = require("readline-sync");
const ageYears = readline.question("What's your age in years? ");

let ageMonths = ageYears * 12

console.log("Your age in months is: " + ageMonths);