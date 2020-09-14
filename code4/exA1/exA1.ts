import { argv } from "process";

class PlushToy {
   private index: number = 0;
   greeting: Array<string>;

   constructor (){
      this.greeting = ["Hi", "Hello", "How are you"];
   } 
   greet() {
      console.log(this.greeting[this.index]);
      this.index++;
      if (this.index >= this.greeting.length){
         this.index = 0;
      } 
   }
   newGreeting(newGreeting: string){
      this.greeting.unshift(newGreeting);
   }

}

 let toy = new PlushToy();
// toy.greet();
// toy.greet();
// toy.greet();
// toy.greet();

class PlushDog extends PlushToy {
   name: string;

    constructor (input?: string){
       super(); 
       input ? this.name = input : this.name = "No name";
   }
}
let doggy = new PlushDog("Kekkonen");

doggy.newGreeting("bark");
doggy.newGreeting(`woof!${doggy.name}`);

doggy.greet();
doggy.greet();
doggy.greet();
doggy.greet();
doggy.greet();
doggy.greet();
doggy.greet();


// function isPlushDog(object: any) {
//    return object instanceof PlushDog;
// }

function isPlushDog (a: unknown): a is PlushDog{
   if (typeof a === "object" && a) {
      if ((a as PlushDog).name !== undefined) {
          return true;
      }
  }
  return false
}

console.log(isPlushDog(doggy));
console.log(isPlushDog(toy));