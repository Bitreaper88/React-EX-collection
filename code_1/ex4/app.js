const readline = require("readline-sync");
const year = readline.question("Input year: ");




if (year % 4 !== 0){ //year is not divisible by 4 then it is a common year
    console.log( year + " is a common year");
}
else if (year % 100 !== 0){ //year is not divisible by 100) then it is a leap year
    console.log( year + " is a leap  year");
}
else if (year % 400 !== 0){ // year is not divisible by 400) then it is a common year
    console.log( year + " is a common year");
}
else {
    console.log( year + " is a leap year");
}

