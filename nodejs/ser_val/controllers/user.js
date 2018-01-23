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
var tokens=[]

function getList(){console.log(tokens)
    return tokens}
//esta funcion genera un token y guarda un usuario en la base de datos
function generateToken(user){
        //se guardan los valores del usuario:payload
        var useR={nombre:user.nombre,id:user.id}
        //se envian los valores del usuario, el sign recibe el payload y password, tambien las opciones de encriptacion
        return jwt.sign(useR,'password',{
            expiresIn:60*60
        })
    }

function entrar(req,res){
    var para = req.body;
    var nombre= para.nombre;
    var password= para.password;
    console.log(nombre+'  '+password)
    if (nombre&&password){
    var tok=generateToken(req);
    User.findOne(para,(err,useR)=>{
        var n=false;
        var p=false;
        if (useR!=null){
            //console.log(userR.typeof())
            console.log(useR)
            //var para2=useR.body;
            console.log(useR.nombre)
            var uNomb=useR.nombre
            var uPassword=useR.password
            console.log('234')
            
            console.log(para)
            //console.log(user+'=='+para)
            console.log(uNomb+'=='+nombre+"n")
            console.log(uPassword+'=='+password+"p")
            var n=uNomb==nombre
            console.log(n+"n")
            
            var p=uPassword==password
            console.log(p+"p")
        }
       if(err)
        return res.status(500).send({message:err})//console.log(err)
       else if 
            ((n!=true&&p!=true))
                return res.status(404).send({message:'no se encuentra usuario'}) 
       req.user=res.status(200).send({
           message:"se ha logeado correctamente",
           token:tok
        })

    })
    tokens.push(tok)
    console.log(tokens)
}
else{res.status(500).send('datos mal ingresados, revise nuevamente')}

}

function leerUser(){
    var conts=fs.readFileSync("user.json");
    let r=false;
    
    try
   {
    var jsonCont=JSON.parse(conts);
    //let us=new User(jsonCont)
    console.log(jsonCont.nombre)
    console.log(jsonCont.password)
         if(typeof(jsonCont.nombre)!="undefined" &&typeof(jsonCont.password)!="undefined"){
            console.log(jsonCont.nombre+"nomb");
            console.log(jsonCont.password+"pass");
            console.log(typeof(jsonCont.nombre)+"tipo");
         r=jsonCont}

    }
   catch(e){r=false}//res.send(`no esta bien escrito el archivo de configuracion`)}
    
    console.log(r)
    return r
    //     var conts = fs.readFileSync("user.json"); 
    //     var jsonCont = JSON.parse(conts);
    //     var estado = jsonCont.filter((obj)=>{
    //         console.log(obj)
    //         console.log(obj.user)
    //         console.log("antes")
    //         try{
    //             obj.user
    //             obj.password
    //             console.log(obj)
    //             return obj[0];
    //         }
    //         catch(e){
    //             return false
    //         }
            
    //     });
    //     console.log(estado)
    //     return estado;
     }
function leerRoles(us){
        var conts = fs.readFileSync("roles.json"); 
        var jsonCont = JSON.parse(conts);
        
        var roles = jsonCont.map((obj)=>{
            console.log(obj)
            console.log(obj.id)
            console.log("antes")
            try{
                let r=obj.id
                us.roles.push(r)
                console.log(obj)
                console.log("obj")
                //return obj;
            }
            catch(e){
                return false
            }
            
        });
        console.log(us.roles)
        
        //return roles;

}
const deep=require('deepcopy');
function guardarUser(req,res){ 
    //enviar objeto con diferentes caracteristicas, nombre, apellido,revisar que tenga todas las caracteristicas
        //y que diga cuales faltan antes de guardar en la base 
        //de datos, en el json hay mas de 
        //1 dato, envia totalmente el objeto y lo valida y lo guarda en la base de datos 
        
        let user= leerUser(res);
        let us= new User();
        //let us = deepcopy(res)

        //console.log(us)
        
        switch (user){
            case false:
                res.status(500).send('datos mal ingresados, revise nuevamente')
                break;
            default:
                // us.nombre=user.nombre;
                // us.password=user.password;
                //Object.assing(objetivo,fuente)
                    Object.assign(us,user)
                    
                    leerRoles(us);
                
               
                us.save((err,userStored)=>{
                    if (err){
                        res.status(500).send('error al guardar imagen')
                    }
                    else{
                        res.status(500).send({user:userStored})}
                })
                    
                }
        }
            
        
//     var conts=fs.readFileSync("roles.json");
//     try
//    { var jsonCont=JSON.parse(conts); }
//    catch(e){res.send(`no esta bien escrito el archivo de configuracion`)}
//     console.log(jsonCont.id+"id");
//     return jsonCont
    
    
    

    


function getUser(req,res){
    //revisa que los parametros esten
    var para = req.body;
    var name = para.nombre;
    var pass = para.password;
    //c es todo el archivo jsoncont
    var c= buscar(res);
    var i= c.id;
    var nomb= c.nombre;
        console.log(name)
        console.log(pass)
        console.log(typeof(pass))
        //find(User).limit(1).next({nombre:name,password:pass},function(err, info){
        User.findOne({nombre:name,password:pass,roles:{$in:[i]}},(err,info)=>{
            
                      
            if(info!=null){
                console.log(info) 
                console.log(info.roles[0])
                try{
                    console.log('entra')
                
                    // info[0].roles.map((obj)=>{
                    
                    // console.log(obj+"objeto")
                    // console.log(roli+"roli")
                    
                    
                    console.log(i)
                    switch(c){
                        case false:
                            rta=`no se ha autenticado bien, revise los parametros de entrada`
                            stat=404
                            break;

                        case (info.roles[0]!=c):
                            rta=`este usuario no tiene el permiso ${nomb}`
                            break;
                        default:
                            rta=`bienvenido ${name}, se ha autenticado con permisos de ${nomb} `
                            
                            stat=200;
                                                
                            
                    }
                    // console.log("ppepepe")
                    
                    // })
                    res.status(stat).send({message: `${rta} bienvenido `})
                    rta=null
                }

        catch(e){
            console.log("mal")
            console.log(rta)
            console.log(e)
            console.log('23')
            if (rta==null){ res.send(`no se ha autenticado bien, revise los parametros de entrada`)}
            else{res.status(stat).send({message: `error: ${e}` })}
           }      }
        else{{ res.send(`nos se ha autenticado bien, revise los parametros de entrada `)}}     
})

//   {  "id":5,
//     "nombre":"administrador"
        
    
//     }
}
function buscar(res){
    var conts=fs.readFileSync("rol.json");
    try
   { var jsonCont=JSON.parse(conts); }
   catch(e){res.send(`no esta bien escrito el archivo de configuracion`)}
    console.log(jsonCont.id+"id");
    return jsonCont
    //console.log(String(id))
    //console.log(obj.id === id);
    // var role = jsonCont.permisos.find((obj, ind) => {
        
    //     console.log(obj.id+"obj.id")
    //     console.log(String(obj.id)===String(id))
    //     return (String(obj.id) === String(id))}
    // )
    //    console.log(role);
    //  return (role !== null) ? (role.nombre) : (false);
   
   
}

module.exports={
getUser,entrar,getList,guardarUser
}