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
        /**
         * This is super ugly, There has to be a better way
        */
        let y = 0;
        for (y = 0; y < 10; y++) {
            let sl: string = "";
            let x = 0;
            for (x = 0; x < 10; x++) {
                let icon: string = "";
                let traveled: Boolean = false;
                this.posLog.forEach(pos => { if( x === pos.x && y === pos.y) traveled=true  });
                
                if (traveled) icon = "*";
                else icon = "-";
                
                if(this.position.x === x && this.position.y === y) icon = "R";
                sl += ` ${icon} `;
            }
            console.log(sl);        
        }
       // console.log(`${this.name} position: ${this.position.x}, ${this.position.y}, heading: ${Compass[this.direction]}`)
    }
    
    printLog(){
        console.log("Travel Log:");
        for(let i = 0, l = this.posLog.length; i < l; ++i) {
          let p = this.posLog[i];
          console.log(` ${p.x},  ${p.y}`);
        }
    }
 }

 console.log("Rovers " + roverInstances);

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
curiosity.moveForward();
curiosity.moveForward();
curiosity.moveForward();
curiosity.moveForward();
curiosity.turnRight();
curiosity.moveForward();
curiosity.moveForward();


curiosity.moveForward();
curiosity.moveForward();
curiosity.moveForward();
curiosity.moveForward();

 curiosity.printLog(); 
 curiosity.printPosition(); 