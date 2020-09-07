
import readline = require('readline-sync');

const inputString : string  = readline.question("Input some string: ");

let shortString : string = inputString.trim();

shortString = shortString.toLowerCase();


if (shortString.length >= 20){
    console.log("Maximum lenght exceed, cutting down length");
    shortString = shortString.slice(0, 19);
}

console.log(shortString);