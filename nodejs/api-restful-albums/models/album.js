'use strict'
//modelo de album
var mongoose= require('mongoose')
var Schema = mongoose.Schema
//esquema de objeto con titulo y descripcion
var AlbumSchema= Schema(
    {title: String,
    description:String}
)
//crea collecccion de documentos en base de datos
module.exports=mongoose.model('Album',AlbumSchema)