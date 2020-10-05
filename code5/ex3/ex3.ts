//postman
import express from "express";
import bodyParser  from "body-parser";

const app = express();
const port = 4321;

let myObj1 = {name: "John",
age: 31,
city: "New York"};

let myObj2 = {name: "Jack",
age: 26,
city: "Dallas"};

let array: Array<any> = new Array();
array.push(myObj1);
array.push(myObj2);

app.get('/', (req, res) => {
   res.send(JSON.stringify(array)); 
});


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/',(request,response) => {
  
   let json  = request.body;
   console.log( request.body.name);

   if (array.find((o: { name: string; }) => o.name === json.name)) response.send("Name already in use")
   else{
      array.push(json)
      response.send("New user created");
   }
   console.log(array);
  
});


app.listen(port, () => {
   console.log(`Listening to port ${port}`);
});  // Then connect to localhost:5000 with your browser
