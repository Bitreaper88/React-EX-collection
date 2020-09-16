
console.log("Running");

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

let roverInstances: Array<MarsRover> = [];

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
    case Compass.NORTH: return { x: pos.x + 0, y: pos.y + 1 };
    case Compass.EAST:  return { x: pos.x + 1, y: pos.y + 0 };
    case Compass.SOUTH: return { x: pos.x + 0, y: pos.y - 1 };
    case Compass.WEST:  return { x: pos.x - 1, y: pos.y + 0 };
  }
}

class MarsRover {

    name: string;
    position: IPosition = { x: 0, y: 0 };
    direction: Compass = Compass.NORTH;
    posLog: Array<IPosition> = [ this.position ];

    constructor (startPos: IPosition, name?: string){
        name ? this.name = name : this.name = "Unknown rover";
        this.position = startPos;
        roverInstances.push(this);

    }

    moveForward() { 
       let checkPos = move(this.direction, this.position);
       let spaceFree = false;
        roverInstances.forEach(function (instances) {
            console.log(instances.position + " positions " + checkPos); 
            if (instances.position === checkPos){
                console.log(`Occupied by ${instances.name}`);
            }else{
                spaceFree = true;
            }
        });  
        if (spaceFree){
            this.position = move(this.direction, this.position);
            this.posLog.push(this.position);  
        }
    }

    turnRight(){
      this.direction = turnRight(this.direction);
    }

    turnLeft(){
      this.direction = turnLeft(this.direction);
    }

    printPosition(){
        console.log(`${this.name} position: ${this.position.x}, ${this.position.y}, heading: ${Compass[this.direction]}`)
    }
    
    printLog(){
        for(let i = 0, l = this.posLog.length; i < l; ++i) {
          let p = this.posLog[i];
          console.log(`position ${i} x: ${p.x} y: ${p.y}`);
        }
    }
 }

 let spirit = new MarsRover({ x: 0, y: 1 }, "Spirit");

//  spirit.turnRight();
//  spirit.moveForward();
//  spirit.turnLeft();
//  spirit.moveForward();
//  spirit.moveForward();
//  spirit.moveForward();
//  spirit.printLog(); 
spirit.printPosition();

 let curiosity = new MarsRover({ x: 0, y: 0 }, "Curiosity");

 curiosity.moveForward();
 curiosity.printPosition();
//  curiosity.turnRight();
//  curiosity.moveForward();
//  curiosity.turnLeft();
//  curiosity.moveForward();
//  curiosity.moveForward();
//  curiosity.moveForward();
//  curiosity.printLog(); 