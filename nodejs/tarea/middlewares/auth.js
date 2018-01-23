'use strict'

//este import tra la configuracion de mongoose etc
const index=require('../index');


const services= require('../services')
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
    }).catch(res.status(response.status))
    
    
}
module.exports= isAuth