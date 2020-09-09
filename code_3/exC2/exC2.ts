const array1: Array<string> = ["bananas","apples", "oranges", "bananas"];
let filtered: Array<string> = [];

array1.forEach(item => {
   if(!filtered.includes(item)){
    filtered.push(item);
   }
});

console.log(filtered);