'use strict'
//crear funciones con cantidad de parametros desconocidos, un array
//spread operator(desarmar): function nombre(...recibe){}
//retorna todo lo que recibió de parametro en array
function suma(...numeros){
    let acomul=0;
    for(let i=0;i<numeros.length;i++){
        acomul+=numeros[i];
    }
    return acomul
}



//////////////2 forma
function suma2(...numeros){
    //reduce:cada elemento del array acomula un valor sobre un acomulador, el acomulador se lo pasa al siguiente elemento
            //el segundo parametro es en donde empieza el acomulador
    //recibe acomulador, recibe el sigiente elemento como 2 parametro, 3 parametro, indice por el que va.
    console.log(numeros)
    return numeros.reduce(function(acomul,numero){
        acomul += numero;
        return acomul;
    }) 
    
}
///metodo pasar numeros y que retorne el doble de esos numeros
function dobles(...numeros){
    //la funcion dentro de map se ejecuta para cada elemento
        //recibe el numero del array
    return numeros.map((numero)=>numero*2)
}
//la funcion dobles tambien se puede escribir:
const dobles2= (...numeros)=>numeros.map(numero=>numero*2);

//suma(4,8,12,345)

suma2(3,5,9)

dobles2(3,5,10);

//metrodo filter: encontrar elementos con valores que necesita
const pares= (...numeros)=>numeros.filter(numero=>(numero%2)==0)
pares(17,15,4,0)