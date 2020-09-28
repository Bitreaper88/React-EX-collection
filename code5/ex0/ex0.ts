import http from "http";

const server = http.createServer((req: any, res: any) => {
   res.write("Some cool response!");
   res.end();
});
server.listen(5000);

console.log("Listening port 5000");