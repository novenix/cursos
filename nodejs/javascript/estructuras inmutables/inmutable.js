//immutability

//operador de comparacion:
// ===:igual y exactamente igual 
// 
// 
// 
// 
// 
let nico={nombre:"nico",apellido:"torr",edad="20"}
let otroNico=nico;
//como aqui son iguales, si cambio por medio de otronico.edad=21
//el objeto nico tambien se afecta, porque apuntan al mismo
// espacio en memoria
// 
// 
// 
let contador=1;
 let cumpleanos= function(persona){
     contador++
    persona.edad++
    //efecto de lado
    //side defect: modifica variables que no son
    //de la funcion, porque modifica a el otro nico
    //como tambien a contador
}
/////////////////////////////////////////
//aqui para modificar bien
let nico = {nombre:'nico',
    apellido:'torr',
    edad : '20'
}
let otroNico=nico;

let contador=1;
//funcion pura, cada llamado a la funcion, es como si se puede reemplazar
//por lo que devuelve, y no modifica lo de afuera
let cumpleanos= function(persona){
    const clone=Object.assign({},persona)
    clone.edad++
    contador++
    return clone;

    
    //efecto de lado
    //side defect: modifica variables que no son
    //de la funcion, porque modifica a el otro nico
    //como tambien a contador
}