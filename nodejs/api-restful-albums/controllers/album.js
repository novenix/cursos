'use strict'
//incluir modelo de album para controlador
var Album = require('../models/album')
function getAlbum (req,res){
    var albumId = req.params.id;
    Album.findById(albumId,(err,album)=>{
        if (err){res.status(500).send({message:'error al devolver album'})}
        else{
            if (!album){
                res.status(404).send({message:'no existe el album'})
            }
            else{res.status(200).send({album})}
        }
    })
}
function getAlbums (req,res){
    
    Album.find({},(err,albums)=>{
        if (err){res.status(500).send({message:'error al devolver albums'})}
        else{
            if (!albums){
                res.status(404).send({message:'no hay albums'})
            }
            else{res.status(200).send({albums})}
        }
    })
}
function updateAlbum(req,res){
    var albId=req.params.id
    var update= req.body
    console.log(update)
    Album.findByIdAndUpdate(albId,update,(err,albUpdated)=>{
        if (err){res.status(500).send({message:'ERROR AL ACTUALIZAR ALBUM'})}
        else{res.status(200).send({album:albUpdated})}
    })
}
function saveAlbum(req,res){
    //crear album
    var album =new Album()
    //recoger parametros
    var params=req.body
    album.title = params.title;
    album.description= params.description;

    album.save((err,albStored)=>{
        if (err){res.status(500).send({message:'ERROR AL GUARDAR ALBUM'})}
        else{res.status(200).send({album:albStored})}       
    })
}
function deleteAlbum(req,res){
    var albId=req.params.id
    Album.findById(albId,(err,album)=>{
        if (err){res.status(500).send({message:'ERROR AL DEVOLVER ALBUM'})}
        else{
            if(!album){ res.status(404).send({message:'no existe el album'})}
            else{
                album.remove((err)=>{
                    if (err){res.status(500).send({message:'ERROR AL ELIMINAR ALBUM'})}
                    else{res.status(200).send({message:'ALBUM ELIMINADO'})}   
                })
            }
        }
    })
}
module.exports={
    getAlbum,
    getAlbums,
    saveAlbum,
    updateAlbum,
    deleteAlbum
}