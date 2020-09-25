import { IPosition, Compass, turnLeft, turnRight, move } from "./mapFunctions";

export let roverInstances: Array<MarsRover> = [];
export const gridMap: string[][] = generateMap(10, 3); // generates new map onto where the rovers cane run, n = size of map o  = numebr of obstacles, this map is shared by all rovers

function getRandomPost(max: number): IPosition {
  let pos: IPosition = { x: Math.floor(Math.random() * Math.floor(max)), y: Math.floor(Math.random() * Math.floor(max)) };
  return pos;
}

function generateMap(n: number, o: number): string[][] {
  let obstacles: Array<IPosition> = new Array();
  let map: string[][] = new Array(n).fill(" - ").map(() => new Array(n).fill(" - "));
  while (obstacles.length < o) {
    let obstacle: IPosition = getRandomPost(n);
    if (!obstacles.includes(obstacle)) {
      obstacles.push(obstacle);
      map[obstacle.x][obstacle.y] = " O ";
    }
  }
  return map;
}

export class MarsRover {

  name: string;
  position: IPosition;
  direction: Compass = Compass.NORTH;
  posLog: Array<IPosition> = [];
  lastMessage: string;

  constructor(startPos: IPosition, name?: string) {
    name ? this.name = name : this.name = "Unknown rover";
    this.position = startPos;
    this.posLog.push(startPos);
    roverInstances.push(this);
    this.lastMessage = "Rover landed";
  }

  moveForward() {
    const direction: Compass = this.direction;
    const position: IPosition = this.position;
    let spaceFree: boolean = true;
    const newPos: IPosition = move(direction, position);

    if (newPos.x >= 10 || newPos.x < 0 || newPos.y >= 10 || newPos.y < 0){
      this.lastMessage = "Unable to move, out of bounds";
      return console.log(this.lastMessage);
    }
    if (gridMap[newPos.x][newPos.y] === " O "){
      this.lastMessage = "Unable to move, there is a rock in the way";
      return console.log(this.lastMessage);
    } 

    roverInstances.forEach(rover => { if (rover.position.x === newPos.x && rover.position.y === newPos.y) spaceFree = false });
    if (spaceFree) {
      this.lastMessage = `${this.name} moving toward ${Compass[this.direction]} to coordinates ${newPos.x}, ${newPos.y}}`;
      console.log( this.lastMessage);
      this.position = move(direction, position);
      this.posLog.push(this.position);
      return true;
    }
    else {
      this.lastMessage  = `${this.name} Unable to move, another rover blocks the way`;
      console.log(this.lastMessage);
      return false;
    }
  }

  turnR() {
    this.direction = turnRight(this.direction);
    this.lastMessage = `${this.name} turned right and now faces ${Compass[this.direction]}`;
    console.log(this.lastMessage)
  }

  turnL() {
    this.direction = turnLeft(this.direction);
    this.lastMessage = `${this.name} turned left and now faces ${Compass[this.direction]}`;
    console.log(this.lastMessage);
  }


  printPosition() {
    console.clear();

    console.log(`\n${this.name}:  ${this.lastMessage}`)
    this.posLog.forEach(log => {
      gridMap[log.x][log.y] = " X "
    });

    roverInstances.forEach(rover => {
      gridMap[rover.position.x][rover.position.y] = ` ${rover.name.charAt(0)} `;
    });
    // gridMap[this.position.x][this.position.y] = " R ";

    let x = 0;
    let y = 0;
    /**
     * This renders the grid
     */
    for (y = 0; y < gridMap.length; y++) {
      let sl: string = "";
      for (x = 0; x < gridMap[y].length; x++) {
        sl += (gridMap[x][y]);
      }
      console.log(sl);
    }
  }

  printLog() {
    console.log("Travel Log:");
    for (let i = 0, l = this.posLog.length; i < l; ++i) {
      let p = this.posLog[i];
      console.log(` ${p.x},  ${p.y}`);
    }
  }
}