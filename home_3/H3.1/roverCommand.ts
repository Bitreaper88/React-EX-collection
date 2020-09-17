import {  } from "rover";



let spirit = new MarsRover({ x: 3, y: 3 }, "Spirit");
let curiosity = new MarsRover({ x: 5, y: 5 }, "Curiosity");



curiosity.moveForward();
curiosity.moveForward();
curiosity.moveForward();
curiosity.moveForward();

curiosity.printLog(); 
curiosity.printPosition(); 
curiosity.printPosition();

