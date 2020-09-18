import readline from 'readline-sync';
import { MarsRover  } from "./rover";
import { gridMap, roverInstances  } from "./rover";

let run = true;

let spirit = new MarsRover({ x: 3, y: 3 }, "Spirit");
let curiosity = new MarsRover({ x: 5, y: 5 }, "Curiosity");
let pathfinder = new MarsRover({ x: 2, y: 1 }, "Pathfinder");

let currentRover: MarsRover = spirit; 

const commands = new Map([
    [ 'move',       { procedure:  () => {currentRover.moveForward() } } ],
    [ 'turnR',      { procedure:  () => {currentRover.turnRight() } } ],
    [ 'turnL',      { procedure:  () => {currentRover.turnLeft() } } ],
    [ 'pos',        { procedure:  () => {currentRover.printPosition() } } ],
    [ 'log',        { procedure:  () => {currentRover.printLog() } } ],
    [ 'change',     { procedure:  () => {changeRover() } } ],
    [ 'quit',       { procedure:  () => run = false }],
]);

function changeRover(){
    roverInstances.forEach((rover, index) => {
        console.log(index+1 + ": " + rover.name);
    });

    const input: string = readline.question("Select the Rover you want to control by the index number\n");
    
    if (parseInt(input) > roverInstances.length || parseInt(input) < 1) return console.log(`Invalid index\nYou still controlling ${currentRover.name}`);
    
    currentRover = roverInstances [parseInt(input)-1];
    console.log(`You are now controlling ${currentRover.name}`)
}

console.log(`Welcome to Mars Comander!\n You are now in control of the rover ${currentRover.name}`);
console.log("\n Available commands: \n'move' \n'turnR' \n'turnL' \n'pos' \n'log' \n'change' \n'quit'\n");

while (run){
    const input: string = readline.question("");
    let fn = commands.get(input);
    if(!fn) console.log("Invalid command\nAvailable commands: \n'move' \n'turnR' \n'turnL' \n'pos' \n'log' \n'change' \n'quit'\n");
    else fn.procedure();  
}
// curiosity.moveForward();
// curiosity.moveForward();
// curiosity.moveForward();
// curiosity.moveForward();
// curiosity.printLog(); 
// curiosity.printPosition(); 
// curiosity.printPosition();


//  spirit.turnRight();
//  spirit.moveForward();
//     spirit.printPosition();
//  spirit.turnLeft();
//  spirit.moveForward();
//     spirit.printPosition();
//  spirit.moveForward();
//     spirit.printPosition();
//  spirit.moveForward();
//      spirit.printPosition();
//  spirit.printLog(); 


// //  curiosity.turnRight();
// //  curiosity.moveForward();
// //  curiosity.printPosition();

//  spirit.printPosition();

// curiosity.moveForward();
// curiosity.moveForward();
// curiosity.moveForward();
// curiosity.moveForward();
// curiosity.turnRight();
// curiosity.moveForward();
// curiosity.moveForward();
