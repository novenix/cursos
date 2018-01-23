'use strict'
var app = require('./app')
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/app_album',(err,res)=>{
    if (err){
        console.log('error al encontrar la base de datos app_album')
        throw err
    }
    else{
        
        var n='CONEXION A DB MONGO REALIZADA CORRECTAMENTE'
       
        console.log(n)
        var port = process.env.PORT || 3700
        app.listen(port,function(){
            console.log(`API RES ALBUM funcionando en localhost:${port}`)
        })
    }

})