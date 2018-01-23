'use stricts'
var express=require('express');
var userController=require('../controllers/user');
var auth=require('../middlewares/auth')
var api = express.Router();
var auth=require('../middlewares/auth');

api.post('/user',userController.getUser);

//crear token de usuario que esta en base de datos y guardarlo en variable
api.post('/entrar',userController.entrar)
//obtener token de variable globar
api.get('/secure',auth.secure,(req,res)=>{res.status(200).send({message:'tiene autorizaion'})})
//api.post('/user',userController.saveUser);
//guardar user que entra por json, no recibe nada en body ni en paramentos,solo json
api.post('/new',userController.guardarUser)
module.exports=api;