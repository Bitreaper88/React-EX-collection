//postman
import express, { response } from "express";
import bodyParser from "body-parser";

const app = express();
const port = 4321;

export interface IStudent {
   name: string;
   id: number;
   email: string;
 }

let students: Array<IStudent> = [
   { name: "John", id: 1, email: "john@random.com" },
   { name: "Peter", id: 2, email: "peter@random.com" }];

app.get('/student/:id', (req, res) => {

   console.log("Get student by ID")
   const param = req.params.id;
   const studentObj = students.find( ({ id }) => id === Number(param) );

   console.log(studentObj);

   if (studentObj) {
      res.send(`<h3>
      <p>Name: ${studentObj.name}
      <p>Student ID: ${studentObj.id}
      <p>Email: ${studentObj.email}</h3>`);
   } else res.send(`<h3> Student not found </h3>`);
  
});

app.delete('/student/:id', (req, res) => {

   try {
      delete students[students.findIndex( ({ id }) => id === Number(req.params.id) )];
      res.sendStatus(200);
   } catch (err) {
      res.status(500).send('error can not delete');
   }
   students = students.filter(Boolean);
   console.log(students);

});


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/student/', (request, response) => {

   let json = request.body;
   console.log(request.body.name);

   if (students.find((o: { name: string; }) => o.name === json.name)) response.send("Name already in use")
   else {
      students.push(json)
      response.sendStatus(200);
   }
   console.log(students);

});


app.listen(port, () => {
   console.log(`Listening to port ${port}`);
});  // Then connect to localhost:5000 with your browser
