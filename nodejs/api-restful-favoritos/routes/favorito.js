//para cargar el controlador de favorirto
'use strict'
//cargar express
// crear un server
// require = import
//import de el paquete express
var express= require('express')
//cargar el controlador favorito
var favoritoController=require('../controllers/favorito')
//cargar el router de express
var api= express.Router()

//para crear una ruta con get: recibe request y res es lo que devolvera
//nombre? es el parametro, es opcional
//el favorito controller.prueba es la funcion prueba
api.get('/prueba/:nombre?',favoritoController.prueba);
//favoritoController.getfavorito ubicado en una funcion de controller
api.get('/favorito/:id',favoritoController.getFavorito)
//get favoritos, obtener todos los favoritos
api.get('/favoritos',favoritoController.getFavoritos)
//favoritoController.getfavorito ubicado en una funcion de controller
api.post('/favorito',favoritoController.saveFavorito)
// de tipo put para subir archivos
api.put('/favorito/:id',favoritoController.updateFavorito)
//de tipo delete para borrar
api.delete('/favorito/:id',favoritoController.deleteFavorito)
//exportar api
module.exports=api