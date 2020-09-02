// Write a program that calculates the factorial n! of a given number n.

// n! = n*(n-1)*(n-2)*...*1
// if n=4, factorial n! = 4*3*2*1.


const n = 4;

let factorial =  1;

let i = 1;
while (i <= n){
    
    factorial = factorial*i;
    console.log(i);
    i++;
}

console.log("factorial: " + factorial);