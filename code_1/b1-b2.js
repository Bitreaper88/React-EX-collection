let n = 17;

let sum = 0;

for (i = 0; i <= n; i++) {

    if( i % 3 === 0 || i % 5 === 0 ){
        console.log("modulus: " + i);
    }

    sum = sum + i;  
}

console.log("print sum: " + sum);