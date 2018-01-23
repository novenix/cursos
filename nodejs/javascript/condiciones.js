//mayoria edad para ver pelicula
const starwars7='starwars despertar de la fuerza';
const pgStarwars=13;


const nameNicolas='nicolas';
const namePepe='pepe';
const ageNicolas=20;
const agePepe=12;

let canWatchStarwars=(name,age,company)=>{
    if (age >= pgStarwars){alert(`${name} puede ver ${starwars7} `)}
    else if (company) {alert(`${name} puede ver ${starwars7} porque esta con adulto`)}
    else{alert(`${name} no puede ver la pelicula` )}
}

console.log(canWatchStarwars(nameNicolas,ageNicolas))
console.log(canWatchStarwars(namePepe,agePepe,true))