'use strict'
var Image = require('../models/image')
//como esta unido con album se debe llamar
var Album= require('../models/album')
//path saca la ruta de donde se va a sacar las imagenes
//es el multiparty
var path =require('path')
function prueba(req,res){
    
    res.status(200).send({message:'controlador de imagen funcionando'})
}
//sacar imagen de la base de datos
function getImage(req,res){
    var imageId=req.params.id
    Image.findById(imageId,(err,image)=>{
        if (err){
            res.status(500).send({message:'error en obtener imagen'})
            
        }
        else{
            if(!image){
                res.status(404).send({message:'no existe la imagen'})
            }
            
            else{
                //sacar los datos que tiene vinculada la imagen
                //con que propiedad va a meter en la propiedad album
                 Album.populate(image,{path:'album'},(err,image)=>{
                    //image ya viene relleno de la informacion del documento albun que ya relacionó
                    if (err){
                        res.status(500).send({message:'error en obtener imagen'});
                        
                    }
                    else{
                        res.status(200).send({image});
                    }
                 });
                }
        }
    })
}

function getImages(req,res){
    //recoger albun id que llega
    var albumId=req.params.album
    var find;
    var buscando;
    
    
    if(!albumId){
        //sacar todas las imagenes de base de datos
        //find es para sacar toda la coleccion de objetos de la base de datos
        find =Image.find({}).sort('title')
        
        buscando='la imagen'
    }
    else{
        //sacar todas las imagenes asociadas al album
        find =Image.find({album:albumId}).sort('title')
        buscando='el album'
    }
    find.exec((err,images)=>{
        if (err){
            res.status(500).send({message:'error en la peticion'})
        }
        else{
            if (!images)
            res.status(404).send({message:'no existe '+buscando})
        
        
            Album.populate(images,{path: 'album'},(err,images)=>{
                if (err){
                    res.status(500).send({message:'error en la peticion'})
                }
                else{
                    res.status(200).send({images});
                }
            })
        }

    })

}

function saveImage(req,res){
    var image=new Image();

    var params=req.body;
    image.title= params.title;
    image.picture=null;
    //guardar en albun el id de album para relacionar
    image.album=params.album;
    //guardar en base de datos
    image.save((err,imageStored)=>{
        if (err){res.status(500).send({message:'ERROR AL GUARDAR IMAGEN'})}
        else{
            
            res.status(200).send({image:imageStored})
        }
    });
}

function updateImage(req,res){
    var imageId=req.params.id;
    var update= req.body;
    console.log(update)
    Image.findByIdAndUpdate(imageId,update,(err,imageUpdated)=>{
        if(err){
            res.status(500).send({message: 'ERROR AL ACTUALIZAR LA IMAGEN'})
        }
        else{
            if (!imageId){
                res.status(404).send({message:'no se ha actualizado la imagen'})
            }
            res.status(200).send({image:imageUpdated})
        }
    })
}

function deleteImage(req,res){
    var imageId=req.params.id
    Image.findByIdAndRemove(imageId,(err,imageRemoved)=>{
        if (err){
            res.status(500).send({message:'error al borrar imagen'})
        }
        else{
            if(!imageRemoved){
                res.status(404).send({message:'No existe la imagen'})
            }
            else{res.status(200).send({album: albumRemoved})}
        }
    })
}

//para subir imagenes
function uploadImage(req,res){
    var imageId=req.params.id
    //actualizar documento, introducir en picture el nombre de imagen a subir
    //usando multiparty: hay que sacar el path
    var fileName="no subido..."
    
    //para acceder a files,accede a los ficheros que llegan por post
    if(req.files){
        console.log(req.files)
        
        //obtiene el fichero que llega por post
        var filePath=req.files.image.path;
        //recoger nombre del fichero
        var fileSplit= filePath.split('\\');
        //obtener el nombre
        var fileName=fileSplit[1];
        //find par1, update par2: el campo pucture pasa de null a filename
        Image.findByIdAndUpdate(imageId,{picture:fileName},(err,imageUpdated)=>{
            if (err){
                res.status(500).send({message:'error en la peticion'})
            }
            else if (!imageUpdated){
                res.status(404).send({message:'no se ha actualizado imagen'})
            }
            else{
                //pasa info de la imagen que ha actualizado
                res.status(200).send({image:imageUpdated})
            }

        })
        console.log(filePath)
        console.log(fileName)
        
    }
    else{
        res.status(200).send({message:'no se ha subido ninguna imagen'})
    }
}
//modulo file system:sirve para hacer archivos de registro, o guardar en una carpeta
var fs=require('fs')
//metodo para devolver la imagen
function getImageFile(req,res){
    var imageFile=req.params.imageFile;
    //enviar fichero cabecera http
    //revisa si el archivo existe en el servidor
    fs.exists('./uploads/'+imageFile,exists=>{
        if (exists){res.sendFile(path.resolve('./uploads/'+imageFile));}
        else{res.status(200).send({message:'la imagen no existe'})}
    })
    
}

module.exports={prueba,getImage,saveImage,getImages,updateImage,deleteImage,uploadImage,getImageFile}