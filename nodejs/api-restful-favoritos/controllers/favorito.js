//controlador
// se ponen funciones que posteriormente se ponen en la ruta
//es una de las acciones que tiene el controlador

//incluir modelo de Favorito
var Favorito = require('../models/favorito')
function prueba (req,res){
    var nombre
    if(req.params.nombre){
        //para recibir el parametro nombre
        nombre= req.params.nombre}
     else{
        nombre="sin nombre"}

    //para devolver algo con send
    res.status(200).send({data: [2,3,4],texto: "hola mundo con NodeJs y Express"+ ", user "+nombre});
}
//recibe id favorito ,lleega por la url, recibe request y respuesta
//tipo get
function getFavorito(req,res){
    var favoritoId= req.params.id;
    //para buscar ese favorito
    Favorito.findById(favoritoId,function(err,favorito){
        if(err){
            res.status(500).send({message:'error al devolver marcador'})
        }
        else{
            if (!favorito){
                res.status(404).send({message:'No existe el marcador'})
            }
            else{
                 res.status(200).send({ favorito})
            }
        }
        
    })
    
}
function getFavoritos(req,res){
    //find 1, opciones a pasar, odrden etc, parametro 2, callback
     Favorito.find({}).sort('-id').exec((err,favoritos)=>{
         //recibe array de favoritos
         if (err){
             res.status(500).send({message:'error al devolver los marcadores'})
         }
         else{
            if(!favoritos){
                res.status(404).send({message:'no hay marcadores de favoritos'})
            }
            else{        
                res.status(200).send({favoritos})
            }         
        }
         
     })

}

//tipo post, envia datos a ser procesados por recurso
function saveFavorito(req,res){
    //usar objeto favorito
    var favorito = new Favorito()
    
    var params= req.body
    favorito.title = params.title
    favorito.description = params.description
    favorito.url = params.url
    //para guardar en la base de datos
    //favorito stores es el favorito que guarda
    favorito.save((err,favStored)=>{
        if (err){
            res.status(500).send({message: 'ERROR AL GUARDAR EL MARCADOR'})
        }
        else{
            res.status(200).send({favorito:favStored})
        }
        //si todo esta bien no se pone else
    })
   
}
//de tipo put: para realizar uploads 
function updateFavorito(req,res){
    var favId =req.params.id;
    var update = req.body
    //muestra en consola lo que estamos añadiendo, se puede borrar
    console.log(update)
    //llamar moongose para buscar objeto y llamarlo
    Favorito.findByIdAndUpdate(favId,update,(err,favUpdated)=>{
        if(err){
            res.status(500).send({message: 'ERROR AL ACTUALIZAR EL MARCADOR'})
        }
        else{   
             res.status(200).send({favorito:favUpdated})
        }
    })
    
}
//de tipo delete: para borrar recurso especificado
function deleteFavorito(req,res){
    var favId =req.params.id;
    Favorito.findById(favId,function(err,favorito){
        if(err){
            res.status(500).send({message:'error al devolver marcador'})
        }
        else{
            if (!favorito){
                res.status(404).send({message:'No existe el marcador'})
            }
            else{
                //borrar favorito
                favorito.remove(err=>{
                    if (err){
                        res.status(500).send({message:'error en peticion, NO HA SIDO BORRADO EL MARCADOR'})
    
                    }
                    else{
                        res.status(200).send({message:'EL MARCADOR HA SIDO ELIMIDADO'})
                    }
                })
            }
        }
       
        
    })
    
}

//para poder ser exportado, metodos, etodo prueba, añadir favoritos y eliminar favoritos
module.exports={
    prueba,
    getFavorito,
    saveFavorito,
    getFavoritos,
    updateFavorito,
    deleteFavorito,
    
}