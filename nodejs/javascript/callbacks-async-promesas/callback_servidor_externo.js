//api de starwars
//recibe url y callback o (cb,onfinish)
function get(url, callback) {
    const xhr = new XMLHttpRequest();
  
    xhr.onreadystatechange = function() {
      const DONE = 4;
      const OK = 200;
      if (this.readyState === DONE) {
        if (this.status === OK) {
          //Todo OK
          //llamada asincrona, el primer parametro es el error
          //para comvertir de string a string en json es con json.parse
          callback(null, JSON.parse(this.responseText));
        } else {
          //Jubo un error
          callback(
            newError(`Se produjo un error al realizar el request ${this.status}`)
          );
        }
      }
    };
  
    xhr.open("GET", URL);
    xhr.send(null);
  }
  function _handleError(err){
    console.log(`request failed: ${err} `);
  }
  //2 parametro es callback(err, req)
  get("https://swapi.co/api/people/1/", function onResponse(err, luke) {
    if (err) {
      return _handleError(err);
    }
    get(luke.homewold,function onHomeworld(err,homeworld){
      if (err) return _handleError(err);
      luke.homeworld = homeworld;
      console.log(`${luke.name} nació en ${luke.homeworld.name} `)
    })
    console.log(`request succeded`);
    console.log(luke, "luke");
  });
  