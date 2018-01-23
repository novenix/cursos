'use strict'
//2 metodos similares, tienen que ver con bind
//sirve para invocar la funcion en el momento
//se le pasa un contexto y los parametros que requiere

const nicolas={
    nombre:'nicolas',
    apellido:'torres'
}
function saludar(alguien,veces){

    for (let i = 0; i < veces ; i++){
        console.log(`hola ${this.nombre} ${this.apellido} `)
    }
}
//para llamar funcion
// saludar.call(nicolas,3)


///////con otra manera con call
const nicolas={
    nombre:'nicolas',
    apellido:'torres'
}
function saludar(veces,uppercase){
    const str =`hola ${this.nombre} ${this.apellido} `
    let= uppercase? str.toUpperCase():str;
    for (let i = 0; i < veces ; i++){
        console.log(str)
    }
}
//para llamar funcion
saludar.call(nicolas,3,true)

////otra manera con call
const nicolas={
    nombre:'nicolas',
    apellido:'torres'
}
function saludar(veces,uppercase){
    const str =`hola ${this.nombre} ${this.apellido} `
    let= uppercase? str.toUpperCase():str;
    for (let i = 0; i < veces ; i++){
        console.log(str)
    }
}
//para llamar funcion
const params=[3,true]
saludar.call(nicolas,...params)



////otra manera con apply
const nicolas={
    nombre:'nicolas',
    apellido:'torres'
}
function saludar(veces,uppercase){
    const str =`hola ${this.nombre} ${this.apellido} `
    let= uppercase? str.toUpperCase():str;
    for (let i = 0; i < veces ; i++){
        console.log(str)
    }
}
//para llamar funcion

saludar.apply(nicolas,[3,true])