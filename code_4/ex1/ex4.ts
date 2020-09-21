
import fetch from "node-fetch"

// (async () => {
//   let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   console.log(response);
// })();


// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then(response => console.log(response))




// const axios = require("axios");

// axios.get('https://jsonplaceholder.typicode.com/todos/1')
// .then((response: any) => console.log(response))
// .catch((error: any )=> console.log(error));





fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => console.log(json))