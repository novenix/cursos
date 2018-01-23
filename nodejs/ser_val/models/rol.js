'use strict'
//modelo de imagen
var mongoose= require('mongoose')
var Schema = mongoose.Schema
//esquema de objeto con titulo y descripcion
var RolSchema= Schema({
    id:Number,
    nombre: String    
}
)
//crea collecccion de documentos en base de datos
module.exports=mongoose.model('Rol',RolSchema)