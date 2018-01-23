'use strict'
//clousures: recuerdan el scope y pueden acceder a las 
//variables del scope, all llamar las variables tienen 
//los valores que tienen en ese momento

//saludar miembros de una familia

function saludarFamilia(apellido){
    return function saludarMiembro(nombre){
        console.log(`hola ${nombre} ${apellido} `)
    }
}
const saludarTorres=saludarFamilia("torres")
const saludarPerez=saludarFamilia("perez")
//sale hola nicolas torres porque:
    // al llamar saludarTorres se le envia un dato, alli 
    // se llama otra funcion llamada saludar familia, se le 
    // envian datos, y alli hay una funcion adentro, esta funcion
    // recibe un dato, no sabe cual es, pero fue el que se le envio por primera 
    // vez al saludarTorres, que fue el nombre

saludarTorres("eduardo")
saludarTorres("nicolas")
saludarTorres("monica de")


saludarPerez("pepe")
///////////reto
//funcion que permita crear prefijos para las palabras
const prefijoRe= makePrefixer("re");
const prefijoIn= makePrefixer("in");
//cuando llame a make prefixer, que se ponga el re en la palabra
//si se pone bueno, retorna re bueno
function makePrefixer(pref){
    return (palabra)=>console.log(`${pref}${palabra} `)
}
prefijoRe("malo")
prefijoIn("creible")