const {createServer} = require('node:http');
const hostname = "127.0.0.1"; 
const port = 3000;  
createServer((req,res)=>{
res.setHeader('Content-Type','text/plain'); 
res.statusCode = 200;
res.end('hello'); 
}).listen(port,hostname,()=>{
console.log("server is runing at" + port + hostname)
}); 
