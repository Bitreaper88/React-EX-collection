interface IPosition {
  x: number;
  y: number;
}

enum Compass {
  NORTH,
  EAST,
  SOUTH,
  WEST,
}

export let roverInstances: Array<MarsRover> = [];

function turnLeft(direction: Compass): Compass {
  switch(direction) {
    case Compass.NORTH: return Compass.WEST;
    case Compass.EAST: return Compass.NORTH;
    case Compass.SOUTH: return Compass.EAST;
    case Compass.WEST: return Compass.SOUTH;
  }
}

function turnRight(direction: Compass): Compass {
  switch(direction) {
    case Compass.NORTH: return Compass.EAST;
    case Compass.EAST: return Compass.SOUTH;
    case Compass.SOUTH: return Compass.WEST;
    case Compass.WEST: return Compass.NORTH;
  }
}

function move(direction: Compass, pos: IPosition): IPosition {
  switch(direction) {
    case Compass.NORTH: return { x: pos.x + 0, y: pos.y - 1 };
    case Compass.EAST:  return { x: pos.x + 1, y: pos.y + 0 };
    case Compass.SOUTH: return { x: pos.x + 0, y: pos.y + 1 };
    case Compass.WEST:  return { x: pos.x - 1, y: pos.y + 0 };
  }
}

export const gridMap: string[][] = generateMap(10, 3); // generates new map onto where the rovers cane run, n = size of map o  = numebr of obstacles, this map is shared by all rovers

function getRandomPost(max: number): IPosition {
  let pos: IPosition = { x:  Math.floor(Math.random() * Math.floor(max)), y:  Math.floor(Math.random() * Math.floor(max))};
  return  pos ;
}

function generateMap(n: number, o: number) : string[][] { 
  let obstacles = new Array();
  let map: string[][] = new Array(n).fill(" - ").map(() => new Array(n).fill(" - "));
  while (obstacles.length < o){
    let obstacle: IPosition = getRandomPost(n);
    if (!obstacles.includes(obstacle)){
      obstacles.push(obstacle);
      map[obstacle.x][obstacle.y] = " O ";
    } 
  }
  return map;
}

export class MarsRover {

    name        : string;
    position    : IPosition;
    direction   : Compass = Compass.NORTH;
    posLog      : Array<IPosition> = [];

    constructor (startPos: IPosition, name?: string){
        name ? this.name = name : this.name = "Unknown rover";
        this.position = startPos;
        this.posLog.push(startPos);
        roverInstances.push(this);

    }

    moveForward() {

        const direction: Compass     = this.direction;
        const position:  IPosition   = this.position;
        let spaceFree:   boolean     = true;
        const newPos:    IPosition   = move(direction, position);

        if (newPos.x >= 10 || newPos.x < 0 ||  newPos.y >= 10 || newPos.y < 0 ) return console.log("Unable to move, out of bounds");
        if (gridMap[newPos.x][newPos.y] === " O ") return console.log("Unable to move, there is a rock in the way");
      
        roverInstances.forEach(rover => { if (rover.position.x === newPos.x && rover.position.y === newPos.y) spaceFree = false});
        if (spaceFree){
            console.log(`${this.name} moving toward ${Compass[this.direction]} to coordinates ${newPos.x}, ${newPos.y}}`)
            this.position = move(direction, position);
            this.posLog.push(this.position);
        }
        else console.log(`${this.name} Unable to move, another rover blocks the way`)  
    }

    turnRight(){
      this.direction = turnRight(this.direction);
    }

    turnLeft(){
      this.direction = turnLeft(this.direction);
    }

   
    printPosition(){

        console.log(`\n${this.name} positon`)

        this.posLog.forEach(log =>{
            gridMap[log.x][log.y] = " X "
        });

        roverInstances.forEach(rover => {
            gridMap[rover.position.x ][rover.position.y] = ` ${rover.name.charAt(0)} `;
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
    
    printLog(){
        console.log("Travel Log:");
        for(let i = 0, l = this.posLog.length; i < l; ++i) {
          let p = this.posLog[i];
          console.log(` ${p.x},  ${p.y}`);
        }
    }
 }