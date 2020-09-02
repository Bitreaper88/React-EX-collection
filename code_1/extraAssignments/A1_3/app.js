const readline = require("readline-sync");
const number = readline.question("Input number: ");

if (number % 2 !== 0) {
    console.log("Your number is odd");  
} else {
    console.log("Your number is even");      
}

