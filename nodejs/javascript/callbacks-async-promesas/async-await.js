//async await: es porque se usa babel para transpilar proyecto
//      (pasar a versiones anteriores de navegadores)y hacerlo compatible

    
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
      
    
      