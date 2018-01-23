'use strict'
var express= require('express');
var app= express();
var bodyParser =require ('body-parser');
var url=require('url')
//guardar el registro de lo que se ha hecho
var fs= require('fs');

//cargar album routes en app
var albumRoutes=require('./routes/album')
//cargr images
var imageRoutes=require('./routes/image');

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
//configurar cabeceras(frontEnd)
app.use((req,res,next)=>{
    //configurar los headers,* significa que cualquier url puede hacer peticiones
    res.header('Acces-Control-Allow-Origin','*')
    //headers a llegar
    res.header('Acces-Control-Allow-Headers','X-API-KEY,Origin,X-Requestes-With,Content-Type,Accept,Acces-Control-Request-Method')
    //metodos http que pueden legar
    res.header('Acces-Control-Allow-Methods','GET,POST,OPTIONS,PUT,DELETE')
    //
    res.header('Allow','GET,POST,OPTIONS,PUT,DELETE')
    //lanzar funcion next para que salga de la funcion
    next()

})
//midelware
app.use((req,res,next)=>{
    var ruta=url.parse(req.url).pathname;
    var reg= fs.createWriteStream('registrob.txt',{'flags':'a'})
    reg.write(ruta+'\n')
    next();
}
) 


//usar lo que cargan las rutas
//pase y segundo parametro fichero de ruta
app.use('/api',albumRoutes)
app.use('/api',imageRoutes)
module.exports=app