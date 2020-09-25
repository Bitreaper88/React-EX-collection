//import readline from 'readline-sync';
import { MarsRover } from "./rover";
//import { roverInstances  } from "./rover";

class botRover {

    stepDelay: number;
    moveCount: number;
    rover: MarsRover;

    constructor(rover: MarsRover, msDelay: number, moveCount: number) {
        this.rover = rover;
        this.stepDelay = msDelay;
        this.moveCount = moveCount;
        this.autoPilot();

    }

    timer(ms: number) {
        return new Promise(res => setTimeout(res, ms));
    }

    async autoPilot() {
        console.log(`${this.rover.name}: Auto pilot engaged`);
        await this.timer(1000)
        let step: number = 0;
        while (true) {
            step++;
            this.rover.printPosition();
            await this.timer(this.stepDelay);
            if (this.rover.moveForward()) continue;

            await this.timer(this.stepDelay);
            this.rover.printPosition();
            this.rover.turnL();

            if (step >= this.moveCount) {
                console.log(`${this.rover.name}: Auto pilot disengaged`)
                break;
            }
        }
    }
}

let spirit = new MarsRover({ x: 3, y: 3 }, "Spirit");
let curiosity = new MarsRover({ x: 5, y: 5 }, "Curiosity");
let pathfinder = new MarsRover({ x: 2, y: 1 }, "Pathfinder");

let botSpirit = new botRover(spirit, 1000, 14);
let botpathfinder = new botRover(curiosity, 700, 20);
let botpathfindert = new botRover(pathfinder, 2000, 10);