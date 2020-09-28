import express from "express";

const app = express();
const port: number = 4321;

app.get('/counter', (request, response) => {
   response.send("<h1> Heroooo ^_^ </h1>")

});
app.listen(port, () => {
   console.log(`Listening to port ${port}`);
});  // Then connect to localhost:5000 with your browser
