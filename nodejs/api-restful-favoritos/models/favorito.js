

//esquema del registro que se va a guardar o tipo de documento que va a guardar en la db
'use strict'
//lama moongose
var moongose=require('mongoose')
//esquema de moongose 
var Schema = moongose.Schema

//esquema representa los documentos guardados en la base de datos
//tipo de documento tipo favorito

var favoritoSchema=Schema({
    title:String,
    description: String,
    url: String
})
//nombre esquema, representando esquema
module.exports = moongose.model('Favorito',favoritoSchema)
