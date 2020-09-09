const readline = require("readline-sync");
const number = readline.question("Input number between 0 and 10: ");

if (number < 0 || number > 10) {
    console.log("Error: Number is not between 0 and 10");
}
else {
    console.log(number);
}
