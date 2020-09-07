
import readline = require('readline-sync');

const inputString : string  = "aabbooooofffkkccjjdddTTTz"; // readline.question("Input some string: ");

for (let i = 0; i < inputString.length-1; i++) {
    
    //console.log("inputString[i]: " + inputString[i] + inputString[i+1]);  
    if(inputString[i] !== inputString[i+1] && inputString[i] !== inputString[i-1] ){
        console.log("The first non-repeating character is: " +  inputString[i]);
        break;
    }
    if(i === inputString.length-2){
        console.log("The first non-repeating character is: " +  inputString[i+1]);
    }
}
