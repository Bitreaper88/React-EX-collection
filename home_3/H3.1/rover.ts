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

const roverInstances: Array<MarsRover> = [];

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

const gridMap: string[][] = generateMap(10, 3); // generates new map onto where the rovers cane run, n = size of map o  = numebr of obstacles, this map is shared by all rovers

function generateMap(n: number, o: number) : string[][] {
  const obstacles: IPosition[] = new Array(n);

  let map = new Array(n).fill(" - ").map(() => new Array(n).fill(" - "));

  return map
}

class MarsRover {

    name        : string;
    position    : IPosition;
    direction   : Compass = Compass.NORTH;
    posLog      : Array<IPosition> = [];

    constructor (startPos: IPosition, name?: string){
        name ? this.name = name : this.name = "Unknown rover";
        this.position = startPos;
        roverInstances.push(this);

    }

    moveForward() {

        const direction: Compass     = this.direction;
        const position:  IPosition   = this.position;
        let spaceFree:   boolean     = true;
        const newPos:    IPosition   = move(direction, position);

        if(newPos.x >= 10 || newPos.x < 0 ||  newPos.y >= 10 || newPos.y < 0) return console.log("Out of bounds, no movement");
        roverInstances.forEach(rover => { if (rover.position.x === newPos.x && rover.position.y === newPos.y) spaceFree = false});
        if (spaceFree){
            console.log(`${this.name} moving toward ${Compass[this.direction]} to coordinates ${newPos.x}, ${newPos.y}}`)
            this.position = move(direction, position);
            this.posLog.push(this.position);
        }
        else console.log(`${this.name} is unable to move. Path is blocked`)  
    }

    turnRight(){
      this.direction = turnRight(this.direction);
    }

    turnLeft(){
      this.direction = turnLeft(this.direction);
    }

   
    printPosition(){

        this.posLog.forEach(log =>{
            gridMap[log.x][log.y] = " X "
        });

        roverInstances.forEach(rover => {
            gridMap[rover.position.x ][rover.position.y] = ` ${rover.name.charAt(0)} `;
        });
        //gridMap[this.position.x][this.position.y] = " R ";

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

 let spirit = new MarsRover({ x: 3, y: 3 }, "Spirit");
 let curiosity = new MarsRover({ x: 5, y: 5 }, "Curiosity");


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

