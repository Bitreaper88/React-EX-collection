/* 
Bulls and Cows 
Presented by Purkka productions 
 */
import * as  readline from 'readline-sync';

let setWord : string  =  readline.question("Set the word to be guessed: ");
setWord = setWord.toLowerCase();
console.log("The word is " + setWord.length + " characters long");

while(true){

   let checkWord : string  =  readline.question("Guess a word: ");
   checkWord = checkWord.toLowerCase();
    if (check(setWord, checkWord) === true){
        console.log("YOU WIN!! " + setWord + " is correct");
        break;
    } 
}

function check(setWord: string , checkWord: string ) {
    let match: boolean  = false;
    let cow: number = 0;
    let bull: number =  0;
    

    for (let i = 0; i < setWord.length; i++) {
        if(setWord.charAt(i) === checkWord.charAt(i)){
            bull++;
        }
        else if (setWord.includes(checkWord.charAt(i))) {
            cow++;
        }
    }
    if (bull === setWord.length){
        match = true;
    }
    console.log(`${bull} Bulls ${cow} Cows` );
   return match;   // The function returns the product of p1 and p2
}