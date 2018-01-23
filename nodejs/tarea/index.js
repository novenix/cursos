'use strict'
var app = require('./app');
var mongoose= require('mongoose');

mongoose.connect('mongodb://localhost:27017/serv_us',(err,res)=>{
    if (err){
        console.log('error al encontrar la base de datos serv_us')
        throw err
    }
    else{
        console.log('CONEXION A DB MONGO REALIZADA CORRECTAMENTE')
        var port = process.env.PORT || 3700
        app.listen(port,function(){
            console.log(`API RES ALBUM funcionando en localhost:${port}`)
        })
    }
})
//codigo de cifrado tokens
SECRET_TOKEN:'clavedetokens'