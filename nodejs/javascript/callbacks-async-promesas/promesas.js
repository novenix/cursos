//recibe url y callback o (cb,onfinish)
//promesas son objetos:
    //tiene 3 estados:
    //  pending:pendiente
    //  fullfilled:completa
    //  rejected: no se pudo completar
    //se le pasan 2 parametros
const promise = new Promise(function(resolve,reject){
    //tarea asincrona
    setTimeout(function(){
        reject(new Error ("se produjo error"))
    },1000)
});
/*
    otra forma de escribir es 
    const promise = new Promise(function(resolve,reject){
        setTimeout(resolve,1000)
    })
*/
promise
    .then(function(){
        
    })
    .catch (function (err){

    })
/////////////////////////////////////////////////
function get(URL) {
    return new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest();
  
        xhr.onreadystatechange = function() {
        const DONE = 4;
        const OK = 200;
        if (this.readyState === DONE) {
            if (this.status === OK) {
            //Todo OK
            //llamada asincrona, el primer parametro es el error
            //para comvertir de string a string en json es con json.parse
            resolve(null, JSON.parse(this.responseText));
            } else {
            //Jubo un error
            reject(
                newError(`Se produjo un error al realizar el request ${this.status}`)
            );
            }
        }
        };
    
        xhr.open("GET", URL);
        xhr.send(null);

        })
    
  }
  function _handleError(err){
    console.log(`request failed: ${err} `);
  }
  let luke ;
  //promesas con fethc
  fetch("https://swapi.co/api/people/1/")
    .then((res)=>res.json())
    .then((json)=>{
        luke=json
        return fetch(luke.homeworld)
    })
    .then(res=>response.json)
    
     
    .then((json)=>{
        luke.homeworld = json
        console.log(`${luke.name} nacio en ${luke.homeworld.name} `)
    })
    .catch((err=> handleError(err)))
  

  /* o tambien el clasico get
    get("https://swapi.co/api/people/1/")
    .then((res)=>{
        luke=response
        return get(luje.homeworld)
    })
    .then((home)=>{
        luke.homeworld = home
        console.log(`${luke.name} nacio en ${luke.homeworld.name} `)
    })
    .catch((err=> handleError(err)))
  
  */
  