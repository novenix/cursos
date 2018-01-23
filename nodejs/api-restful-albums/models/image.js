'use strict'
//modelo de imagen
var mongoose= require('mongoose')
var Schema = mongoose.Schema
//esquema de objeto con titulo y descripcion
var ImageSchema= Schema({
    title: String,
    //guarda nombre de imagen (imagen.png)
    picture:String,
    //relacionar album e imagen
    //ID del album que tenga en base de datos
    album:{type:Schema.ObjectId ,
        //entidad album
        ref:'Album'}
}
)
//crea collecccion de documentos en base de datos
module.exports=mongoose.model('Image',ImageSchema)