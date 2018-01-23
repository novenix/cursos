'use strict'
//importar fichero de app.js para cargar express, es directorio
var  app= require('./app')
//cargar libreria moongose, es paquete
var moongose=require('mongoose')
//conectarse a mongoose
//recibe url de mongo donde esta la url y tiene un callback flecha
//en la url, el localhost por default de mongo es 27017, luego se pone el nombre de la base de datos que vamos a usar
//                 curso fav es el nombre de la base de datos creada en mongo
moongose.connect('mongodb://localhost:27017/curso_fav',(err,res)=>{
    if(err){
        throw err;
    }
    else{
        //se ejecuta el servidor y carga todo
        console.log('CONEXION A MONGO...CORRECTA ')
        //puerto 
        var port= process.env.PORT || 3678
        //el server escucha por el puerto 3678
        //function funcion callback enviar console log para ver que el server funciona
                        //() => {} ; para reemplazar function con flecha
        app.listen(port,function(){
            console.log(`API REST FAV funcionando en localhost:${port} `)
            
    });}
    
})