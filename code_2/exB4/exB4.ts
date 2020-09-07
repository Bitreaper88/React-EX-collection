const numArray: number[] = new Array(10);

for(let i = 0; i < numArray.length; i++) {
    numArray[i] = Math.random()*10;
    numArray[i] = Math.floor(numArray[i]);
}

numArray.sort(function(a, b){return a-b});

console.log("Asending order " + numArray);

numArray.sort(function(a, b){return b-a});

console.log("Decending order " + numArray);
