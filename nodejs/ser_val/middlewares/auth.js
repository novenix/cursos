'use strict'

//este import tra la configuracion de mongoose etc
const index=require('../index');

var jwt = require('jsonwebtoken')
const services= require('../services')
var list= require('../controllers/user')
//este middleware sirve para proteger los usuarios que estan autorizados o no a entrar
function isAuth(req,res,next){
    //comprobar si existe autorizacion en el header
    if(!req.headers.authorization){
        return res.status(403).send({message:'no tienes autorizacion'})
    }
    //entra palabra "bearer token(bfhs908!¡eD)", solo interesa el token
    const token=req.headers.authorization.split(" ")[1]
    services.decodeToken(token).then(response=>{
        req.user=response;
        next()
    }).catch(res.status(response=>{
        
        response.status(response.status)
        next()
        
    }))  
    
    
}

function secure(req,res,next){
    var token =req.headers['authorization']
    if(!token){
        res.status(401).send({message:'token invalido'})
    }
    token=token.replace('Bearer','')
    console.log(`${token} token `)
    var lista= list.getList()
    console.log()
    console.log(`${lista} list `)
    console.log()
    var cosa=lista.find((obj) => {
        console.log(obj+" ========")
        console.log(token)
        console.log(obj==token.trim())

        console.log(typeof(obj)+'=='+typeof(token))
     
        return obj==token.trim()
    })
    console.log(`${cosa} cosa `)
    if (cosa!=null)res.status(200).send({message:`token ${cosa} válido`})
    else{res.status(401).send({message:`token invalido`})}
}

module.exports= {isAuth,secure}