let strings: Array<string> = ["sdfpas", "asdfas"];

let numbers: Array<number> = [1,3, 4,6, 456, 456];


function isNumberArray(value: unknown): value is number[] {
   return (
     Array.isArray(value) &&
     value.every(element => typeof element === "number")
   );
 }


 console.log(isNumberArray(numbers));