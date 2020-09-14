import { IpcNetConnectOpts } from "net";

console.log("Running");
interface IPosition {
    x: number;
    y: number;
  }

enum compas{
    NORTH = 0,
    EAST = 90,
    SOUTH = 180,
    WEST = 270,
} 


class MarsRover {

    position: IPosition = {x: 0, y: 0};
    north: IPosition = {x: 0, y: 1};
    direction:compas;
    posLog: Array<IPosition>;

    move = new Map([
       [ 'NORTH',  {procedure:  () : IPosition => this.north }],
       [ 'EAST',   {procedure:  () => console.log("1, 0")     } ],
       [ 'SOUTH',  {procedure:  () => console.log("-1, 0")    } ],
       [ 'WEST',   {procedure:  () => console.log("0, -1")     } ],
   
   ]);

    constructor (){
        this.position =  {x: 5, y: 0};
        this.direction = compas.NORTH;
        this.posLog = [this.position];
        console.log("this: x: " + this.position.x);
        console.log("this: y: " + this.position.y);

        //console.log(direction.get("NORTH")
    }

    moveForward(){


    }
    turnRight(){
        this.direction = this.direction + 90;

                
        this.direction = this.direction % 360;

        if (this.direction < 0)
        {
            this.direction += 360;
        }
        console.log(compas[this.direction]);
        let fn = this.move.get(compas[this.direction]);
        if(fn) {
            let newPos = fn.procedure();
           console.log(newPos.x);
        }  

    }

    turnLeft(){

    }
    printPosition(){
        console.log("this: x: " + this.position.x);
        console.log("this: y: " + this.position.y);
    }
    printLog(){
        console.log(this.posLog);
    }
 
 }

 let rover = new MarsRover();

 rover.turnRight();
 rover.printPosition();
 rover.printLog();