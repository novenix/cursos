'use strict'
//para encriptar y desencriptar
var jwt = require('jwt-simple')
//para obtener el secret token
const index= require('../index')
//momento de creacion del token
const moment =require('moment');
function generateToken(user){
        //se guardan los valores del usuario:payload
        var payload={nombre:user.nombre,
            id:user.id,
            //creacion del token
            iat:moment().unix(),
            //expiracion token
            exp:moment().add(14,"days").unix()
        }
        jwt.encode(payload,index.SECRET_TOKEN)
        //se envian los valores del usuario, el sign recibe el payload y password, tambien las opciones de encriptacion
        
    }
function decodeToken(token){
    const decode = new Promise((resolve,reject)=>{
        try{
            //decodificacion del token
            const payload=jwt.decode(token,index.SECRET_TOKEN)
            //si es menor al momento actual
            if(payload.exp<=moment.unix()){
                resolve({status:401,
                        message:'el token ha expirado'})
            }
            resolve(payload,id)
        }
        catch(err){
            //lama reject
            reject({status:500,
                        message:'token invalido'})
        }
        
    })
    return decode

}
module.exports={generateToken,decodeToken}



//otra forma
// function generateToken(user){
//     //se guardan los valores del usuario:payload
//     var useR={nombre:user.nombre,id:user.id}
//     //se envian los valores del usuario, el sign recibe el payload y password, tambien las opciones de encriptacion
//     return jwt.sign(useR,{
//         expiresIn:60*60
//     })
// }