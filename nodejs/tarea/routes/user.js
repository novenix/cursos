'use stricts'
var express=require('express');
var userController= require('../controllers/user');
var auth=require('../middlewares/auth')
var api = express.Router();
var auth=require('../middlewares/auth');

api.get('/user/:nombre/:password/:rol',userController.getUser);


api.get('/private',auth,(req,res)=>{
    res.status(200).send({message:'tiene autorizaion'})
})
api.post('/crearUser',userController.crearUser)
api.post('/entrar',userController.entrar)
//api.post('/user',userController.saveUser);
module.exports=api;