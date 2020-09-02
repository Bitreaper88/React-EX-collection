
//a
let playerCount = 4;

if(playerCount === 4){
 console.log("Can be played");
}
else{
    console.log("Can not be played");
}

//b
let isStressed = true;
let hasIcecream = true;
if(!isStressed || hasIcecream){
    console.log("Mark is happy");
}
else{
       console.log("Mark is sad");
}

//c
let sunIsShining = true;
let temperature = 21;
let raining = false;

if(sunIsShining && !raining && temperature > 20){
    console.log("It is a beach day");
}
else{
    console.log("It is NOT a beach day");
}

//d
let seeSuzy = true;
let seeDan = false;

if(seeSuzy && !seeDan ||  seeDan && !seeSuzy){
    console.log("Arin is happy");
}
else{
    console.log("Arin is sad");
}


