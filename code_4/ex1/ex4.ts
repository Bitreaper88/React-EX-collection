
import fetch from "node-fetch"

(async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/todos");
  //console.log(response);
})();


fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => 
    //console.log(response)
  )