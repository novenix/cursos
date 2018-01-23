'use strict'
var app=('./app')
var port= process.env.PORT ||3000;
app.listen(port,function(){
    console.log(`API RES ALBUM funcionando en localhost:${port}`)
});
