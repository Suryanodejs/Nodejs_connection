const http = require('http');
const fs = require('fs');
const express =  require('express');
const app  = express();
//const path = require('path');

const server = http.createServer((req, res)=>{
    if(req.url === "/"){
        res.end("hello from outhers sides1");
    } else if(req.url === "/about"){
        fs.readFile(`${__dirname}/public/index.html`,"utf-8")
       // res.end("Suraj Mishra");
    }
    else{
    res.end("Suraj Mishra");
    }
});
server.listen(8000, "127.0.0.1",()=>{
console.log("listing to the port no 8000");
});