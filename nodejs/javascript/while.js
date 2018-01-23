'use script'
var vidaSuper=100;
var vidaGok=100;
const min_power=5;
const max_power=12;
var golpSuper;
var golpGok;
var ronda=1;
var vivos= () => vidaSuper>0&& vidaGok>0
const calcularGolpe=()=>Math.round(Math.random()*(max_power-min_power)+min_power)
while(vivos&&round <=3 ){
    console.log(`round ${ronda}`)
    golpGok=calcularGolpe();
    golpSuper=calcularGolpe();
    if (golpGok>golpSuper){
        console.log(`goku ataca con un golpe de ${golpGok} `)
        vidaSuper-=golpGok;
    }
    else{
        console.log(`superman ataca con un golpe de ${golpSuper} `)
        vidaGok-=golpSuper;
    }
    console.log(`la vida de superman es ${vidaSuper}, la vida de goku es ${vidaGok} `)
}