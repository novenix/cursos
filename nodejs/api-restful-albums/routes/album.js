//cargar modelo albm 
'use strict'
//cargar express
var express=require('express')
//controlador album
var albumController=require('../controllers/album')
var api=express.Router()
//crear ruta de getalbum
api.get('/album/:id',albumController.getAlbum)
api.get('/albums',albumController.getAlbums)
api.post('/album',albumController.saveAlbum)
api.put('/album/:id',albumController.updateAlbum)
api.delete('/album/:id',albumController.deleteAlbum)
//exportar api
module.exports=api