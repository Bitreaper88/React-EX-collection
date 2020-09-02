const readline = require("readline-sync");
const euros = readline.question("How many euros would you like to convert? ");


console.log(euros + "€ " + "is $" + (euros * 1.18682));

