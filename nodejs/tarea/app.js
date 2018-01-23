'use strict'
var express = require('express');
var app= express() ;
var bodyParser=require('body-parser');
//cargar rutas de user
var userRoutes=require('./routes/user');
app.use(bodyParser.json());
app.use((req,res,next)=>{
    //configurar los headers,* significa que cualquier url puede hacer peticiones
    res.header('Acces-Control-Allow-Origin','*')
    //headers a llegar
    res.header('Acces-Control-Allow-Headers','X-API-KEY,Origin,X-Requestes-With,Content-Type,Accept,Acces-Control-Request-Method')
    //metodos http que pueden legar
    res.header('Acces-Control-Allow-Methods','GET,POST,OPTIONS,PUT,DELETE')
    //
    res.header('Allow','GET,POST,OPTIONS,PUT,DELETE')
    //lanzar funcion next para que salga de la funcion
    next()

})
//middleware para revisar si el token es valido o no
app.use('/secure',function(req,res,next){
    var token =req.headers['autorizacion']
    if(!token){
        res.status(401).send({message:'token invalido'})
    }
    token=token.replace('Bearer','')
    jwt.verify(token,'password',function(err,token){
        if (err){
            return res.status(401).send({message:'token invalido'})
        }
        else{req.token =token;
            next();
        }
    })
})
app.use('/api',userRoutes)
module.exports=app;