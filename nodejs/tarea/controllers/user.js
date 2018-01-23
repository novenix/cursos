'use strict'
var User = require('../models/user');
//var Rol = require('../models/rol')
var fs= require('fs');
var bandera=false;
var rta;
var stat;
//trae todo el archivo de roles .json para leer y buscar entre esos roles
//tokens de json
var jwt = require('jsonwebtoken')
var service=require('../services')
//esta funcion genera un token y guarda un usuario en la base de datos
function crearUser (req,res){
    const user= new User({
        nombre:req.body.nombre,
        password:req.body.password,
        roles:req.body.roles
    })
    user.save(err=>{
        if (err) res.status(500).send({message:`error al crear usuario: ${err}`})
        //crear el token 
        res.status(200).send({token: service.generateToken(user)})
    })
};

function entrar(req,res){
    var nombre= req.params.nombre
    var password= req.params.password
    user.find(nombre,password,(err,user)=>{
       if(err)return res.status(500).send({message:err})
       else if (!user)return res.status(404).send({message:'no se encuentra usuario'}) 
       req.user=userres.status(200).send({
           message:"se ha logeado correctamente",
           token:service.generateToken(user)
        })

    })
}

function getUser(req,res){
    //revisa que los parametros esten
    var name = req.params.nombre;
    var pass = req.params.password;
    var roli=req.params.rol;
   var tok= generateToken(req)
   
    // User.find({nombre:name,password:pass},(err,info)=>{
            
    //                  info[0].roles.map((obj)=>{
                        
    //                       console.log(obj+"objeto")
    //                       var c= buscar(obj);
    //                       var bus= new Promise(function(resolve,reject){
    //                         if(c!=false){resolve(c)}
    //                         else{reject('no hay buena autenticacion')}
    //                     });

    //                     bus.then( res.status(200).send({message:`bienvenido ${name}, se ha autenticado con permisos de ${c} `}
    //                         )).catch( res.status(404).send({message:`no se ha autenticado bien, revise los parametros de entrada`}));

                                               
                    
                       
    //                  })
                
        
        
                    
        
    //      })

    // User.find({nombre:name,password:pass},(err,info)=>{
            
    //                  info[0].roles.map((obj)=>{
                        
    //                       console.log(obj+"objeto")
                        
    //                      var c= buscar(obj);
    //                     c.then(function(buffer){

    //                     })
    //                      switch(c){
    //                          case false:
    //                              res.status(404).send({message:`no se ha autenticado bien, revise los parametros de entrada`})
    //                             break;
    //                          default:
    //                              res.status(200).send({message:`bienvenido ${name}, se ha autenticado con permisos de ${c} `})
        
    //                      }
    //                      console.log(c);
                    
                       
    //                  })
                
        
        
                    
        
    //      })
   
   
        User.find({nombre:name,password:pass},(err,info)=>{
            try{

            
            info[0].roles.map((obj)=>{
                
                 console.log(obj+"objeto")
                 console.log(roli+"roli")
                var c= buscar(obj);
                
                //console.log(c)
                switch(c){
                    case false:
                         rta=`no se ha autenticado bien, revise los parametros de entrada`
                         stat=404
                        break;
                    default:
                        rta=`bienvenido ${name}, se ha autenticado con permisos de ${c} `
                        
                        stat=200;
                        //ClearInterval(stop.value)
                        //window.stop()
                        
                        
                }
                //console.log(c);
                 res.status(stat).send({message: `${rta} token ${tok}`})
                
            })
        


        }
        catch(e){
            if (rta==null){ res.send(`no se ha autenticado bien, revise los parametros de entrada`)}
            else{res.status(stat).send({message: rta })}
           }           


})
}
function buscar(id){
    var conts=fs.readFileSync("roles.json");
    var jsonCont=JSON.parse(conts); 
    console.log(jsonCont.permisos);
    
    var role = jsonCont.permisos.find((obj, ind) => (obj.id === id))
         
    
    
    
    //  var role = jsonCont.permisos.find((obj, ind) => {
    //     console.log(obj.id+'==='+id);
    //     if(obj.id === id){
    //         console.log(obj);
    //         return obj}
    // });
    console.log(role);
     return (role !== null) ? (role.nombre) : (false);
    //revisa y retorna un booleano
    //return jsonCont.permisos.some((obj, ind) => (obj.id === id));
   
}
function t(val){
    return val;
}
module.exports={
getUser,crearUser,entrar
}