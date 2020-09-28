import express from "express";

const app = express();

const port = 4321;


app.get('/', (request, response) => {
   response.send("Heroooo ^_^")
});
app.listen(port, () => {
   console.log(`Listening to port ${port}`);
});  // Then connect to localhost:5000 with your browser
