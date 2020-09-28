import express from "express";

const app = express();

const port = 4321;
export interface IUser {
   name: string;
   count: number;
 }
let users: Array<IUser> = new Array;

app.get('/counter/:name', (req, res) => {
   const name = req.params.name;
   let number = req.query.number;
   console.log("number " + number);

   console.log("name " + name);
   let user = users.find(o => o.name === name);
   console.log(users);
   console.log("the actual user: "+user);
   if(user){
      if(isNaN(Number(number))){
         console.log("query is not a number")
         user.count = Number(user.count)+1;
         console.log("user found add count")
      }
      else user.count = Number(number);
      res.send(`<h1> ${user.name} was here ${user.count} times</h1>`)
   }
   else{
      console.log("create new user");
      const newUser:IUser = { 
         name:name,
         count: 1,
      }
      users.push(newUser);
      res.send(`<h1> ${name} was here ${newUser.count} times</h1>`)
   }
});

app.listen(port, () => {
   console.log(`Listening to port ${port}`);
});  // Then connect to localhost:5000 with your browser
