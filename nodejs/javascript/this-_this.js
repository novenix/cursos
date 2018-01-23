// this hace referenca a un objeto
//prototipo persona,llama a constructor
class Persona{
    constructor(nombre,amigos){
        this.nombre=nombre;
        // con operador || toma lo que tiene amigos o lo deja vacio
        this.amigos=amigos || [];
    }
    //metodo
    listarAmigos(){
        const _this = this;
        
        this.amigos.forEach((amigo)=>console.log(`hola soy ${_this.nombre} y soy amigo de ${amigo}`));
    }

}
const nicolas = new Persona("nicolas",["rulos","camilo","brayan"])

///////otra forma:bind
// this hace referenca a un objeto
//prototipo persona,llama a constructor
class Persona{
    constructor(nombre,amigos){
        this.nombre=nombre;
        // con operador || toma lo que tiene amigos o lo deja vacio
        this.amigos=amigos || [];
    }
    //metodo bind: sirve para setear el valor de this en esa funcion
    //aqui se puede llamar el metodo this original
    listarAmigos(){
        //bind       
        this.amigos.forEach(function(amigo){
            console.log(`hola soy ${this.nombre} y soy amigo de ${amigo}`)
        }.bind(this));
    }

}
const nicolas = new Persona("nicolas",["rulos","camilo","brayan"])
//////////////otra forma
class Persona{
    constructor(nombre,amigos){
        this.nombre=nombre;
        // con operador || toma lo que tiene amigos o lo deja vacio
        this.amigos=amigos || [];
    }
    //metodo bind: sirve para setear el valor de this en esa funcion
    //aqui se puede llamar el metodo this original
    listarAmigos(){
        //bind       
        this.amigos.forEach((amigo)=>{
            console.log(`hola soy ${this.nombre} y soy amigo de ${amigo}`)
        });
    }

}
const nicolas = new Persona("nicolas",["rulos","camilo","brayan"])