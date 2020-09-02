const readline = require("readline-sync");
const yearBirth = readline.question("What's your year of birth? ");
const student = readline.question("Are you a student (yes/no)? ");

const currentYear = new Date().getFullYear();




if (currentYear - yearBirth >= 65 || currentYear - yearBirth <= 16 ||  student === "yes") {
    console.log("Your price of admission is 2.40€")
}
else {
    console.log("Your price of admission is 3.80€")
}