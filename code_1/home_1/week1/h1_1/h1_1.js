const readline = require("readline-sync");

let numbers = [];
numbers[0] = readline.question("Input first number: ");
numbers[1] = readline.question("Input second number: ");
numbers[2] = readline.question("Input third number: ");

numbers.sort(function(a, b){return a-b});
console.log("Smallest number is " + numbers[0]);
console.log("Largest number is " + numbers[numbers.length - 1]);