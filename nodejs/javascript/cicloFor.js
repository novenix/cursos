'use strict'
const dias =["lunes","martes","miercoles","jueves","viernes","sabado","domingo"]
const nombre="nicolas"
function correr (){
    const min=5
    const max=15
    //Math.floor pone el valor mas bajo posible
    return Math.round(Math.random() * (max-min) + min)
} 

let totalKm=0;
const l=dias.length;
for(let i=0;i<l;i++){
    const km = correr();
    totalKm+=km;
    console.log(`el dia ${dias[i]} ${nombre} corrió ${km} kms `)
}
console.log(`${nombre} al final corrio ${totalKm} ksm `)
const promediokm= totalKm/l
//to fixed(2) solo 2 mumeros de decimal
console.log(`en promedio corrió ${promediokm.toFixed()} km por dia`)