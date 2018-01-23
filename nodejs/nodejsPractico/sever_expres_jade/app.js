'use strict'

var express =require('express');
var app= express();
var fs =require('fs');
 app.use(express.static(__dirname+'/public'));
 app.get('/',function(req,res){
    //carga el archivo jade
    //jade sirve para hacer plantillas dinamicas
    //se pueden enviar valores dinamicos tambien, 2 parametro
    res.render('index.jade',
        {
            titulo:"Tienda de frutas",
            fruta:"patata",
            imagen:"java.jpg"
        })
 });
module.exports=app