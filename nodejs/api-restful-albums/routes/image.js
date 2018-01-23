'use strict'

var express=require('express');

var imageController=require('../controllers/image');

var api=express.Router()

//cargar el multiplarty para guardar los ficheros que se suben de forma automatica
var multiParty = require('connect-multiparty')
//directorio a guardar los ficheros que se suban
var multipartyMiddelware= multiParty({uploadDir: './uploads'})

api.get('/pruebaIm',imageController.prueba);
api.get('/image/:id',imageController.getImage);
api.get('/images/:album?',imageController.getImages);
api.post('/image',imageController.saveImage);
api.put('/image/:id',imageController.updateImage)
api.delete('/image/:id',imageController.deleteImage)
//ruta de la imagen a subir, usar el multipartymidellware
api.post('/upload-image/:id',multipartyMiddelware,imageController.uploadImage);
api.get('/get-image/:imageFile',multipartyMiddelware,imageController.getImageFile)
module.exports=api;

