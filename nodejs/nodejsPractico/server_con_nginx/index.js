//'use strict'

var http= require('http');
var port = 3000;
var fs=require('fs');
var plantilla;
http.createServer(function (req,res){
    
    res.writeHead(200,{'Content-Type':'text/plain'});

    //obtener ruta; switch permite devolver diferentes respuestas dependiendo de la info
    switch(req.url){
        //en caso de que sea la raiz del proyecto
        case '/':
            plantilla="inicio.html";
            break;
        case '/nodejs':
            plantilla= "sobrenode.html";
            break;
        //en caso que no este
        default:
            plantilla="404.html"
            break;
    }
    //leer archivo
    fs.readFile(`./plantillas/${plantilla}`,(err,data)=>{
        if (err){res.status(500).send({message:'error 500'})}
        
        //configurar la respuesta
        //dentro de la respuesta a  escribir, pondremos los datos obtenidos de la lectura de plantilla
        res.write(data);
        res.end();
    })
}).listen(port,'localhost');
console.log(`El server se muestra en http://localhost:${port} `);

