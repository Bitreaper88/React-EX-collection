const readline = require("readline-sync");
const sideLength = readline.question("Input length side: ");


console.log("A square with sides of length " +sideLength +"m is " + sideLength**2 + " square meters in area");
