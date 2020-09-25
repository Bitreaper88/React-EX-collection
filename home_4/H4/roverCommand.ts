import readline from 'readline-sync';
import { MarsRover } from "./rover";
import { roverInstances } from "./rover";
import { botRover } from "./autoRover";

export let run = true;

let spirit = new MarsRover({ x: 3, y: 3 }, "Spirit");
let curiosity = new MarsRover({ x: 5, y: 5 }, "Curiosity");
let pathfinder = new MarsRover({ x: 2, y: 1 }, "Pathfinder");

let currentRover: MarsRover = spirit;

const commands = new Map([
    ['move', { procedure: () => { currentRover.moveForward() } }],
    ['turnR', { procedure: () => { currentRover.turnR() } }],
    ['turnL', { procedure: () => { currentRover.turnL() } }],
    ['pos', { procedure: () => { currentRover.printPosition() } }],
    ['log', { procedure: () => { currentRover.printLog() } }],
    ['change', { procedure: () => { changeRover() } }],
    ['auto', { procedure: () => { auto() } }],
    ['autoAll', { procedure: () => { autoAll() } }],
    ['quit', { procedure: () => run = false }],
]);

function changeRover() {
    roverInstances.forEach((rover, index) => {
        console.log(index + 1 + ": " + rover.name);
    });

    const input: string = readline.question("Select the Rover you want to control by the index number\n");
    if (parseInt(input) > roverInstances.length || parseInt(input) < 1) return console.log(`Invalid index\nYou still controlling ${currentRover.name}`);

    currentRover = roverInstances[parseInt(input) - 1];
    console.log(`You are now controlling ${currentRover.name}`)
}

function autoAll() {
    run = false;
    console.log("Assuming control, no further input will be accepted!!!");
    (async () => {
        const botSpirit = new botRover(spirit, 1000, 14);
        const botpathfinder = new botRover(curiosity, 700, 20);
        const botpathfindert = new botRover(pathfinder, 2000, 10);
      
        await botSpirit.autoPilot();
        await botpathfinder.autoPilot();
        await botpathfindert.autoPilot();
        console.log(`Manual control available`);
        mainRun();
      })();
}

function auto() {
    run = false;
    (async () => {
        const timestep: string = readline.question("Set auto pilot parameters\n Input time step in ms: ");
        const stepCount: string = readline.question("Amount of steps: ");
        //console.log(`Assuming control, ${currentRover.name} is now on autopilot`);
        const bot = new botRover(currentRover, parseInt(timestep), parseInt(stepCount));
        await bot.autoPilot();
        console.log(`Manual control available`);
        mainRun();
    })();
}

console.log(`Welcome to Mars Comander!\n You are now in control of the rover ${currentRover.name}`);
mainRun();

function mainRun() {
    run = true;
    console.log("\n Available commands: \n'move' \n'turnR' \n'turnL' \n'pos' \n'log' \n'change' \n'auto' \n'autoAll' \n'quit'\n");
    while (run) {
        const input: string = readline.question("");
        let fn = commands.get(input);
        if (!fn) console.log("Invalid command\nAvailable commands: \n'move' \n'turnR' \n'turnL' \n'pos' \n'log' \n'change' \n'auto' \n'autoAll' \n'quit'\n");
        else fn.procedure();
    }
}
