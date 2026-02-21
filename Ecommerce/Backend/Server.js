const {createServer} = require('node:http');
const hostname = "127.0.0.1"; 
const port = 3000;  
const server = createServer((req,res)=>{
res.setHeader('Content-Type','text/plain'); 
res.statusCode = 200;
res.end('hello'); 
}); 


server.listen(port,hostname,()=>{
console.log("server is runing at" + port + hostname)
}); 
