'use strict'
var app=require('./app')

var port = process.env.PORT || 3700
app.listen(port,function(){
    console.log(`API RES ALBUM funcionando en localhost:${port}`)
})
