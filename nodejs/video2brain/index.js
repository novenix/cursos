'use strict'
var app=require('./app');
//crear servidor
var http= require('http');
var port = 3000;
//iniciar el servidor
http.createServer(function (req,res){
    //header del doc
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write("hola mundo");
    res.end();
}).listen(port,'localhost');
console.log(`El server se muestra en http://localhost:${port} `);

