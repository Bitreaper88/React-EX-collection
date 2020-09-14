const readline = require("readline-sync");
const number1 = parseInt(readline.question("Input number1: "));
const number2 = parseInt(readline.question("Input number2: "));
const number3 = parseInt(readline.question("Input number3: "));

let sum = number1 + number2 + number3;

console.log("The sum is " + sum);

