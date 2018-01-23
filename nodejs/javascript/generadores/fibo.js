//generadores:
//para que sea interpretado como tal
//debe tener un * despues de function*()
function* fibo(){
    //yield: retorna pero deja la ejecucion de la funcion
    //la siguiente vez, la ejecucion continua despues
    //de la siguiente linea
    let a =0,b=1
    while (true){
        let f =a 
        a=b
        b= f + a
        //cuando va a next devuelve el valor calculado
        //se retorna despues de yield, se cumple lo de antes del 
        //yield
        //
        ///se puede hacer asi

        //yield f;

        //si se llama next(true), recibe el valor de true y se reinicia
        //el algoritmo de fibo
        let reset= yield f;
        if (reset)a=0,b=1
    }
}
//es objeto de prototipo
const fibona= fibo()
//para llamarlo y llamar la funcion se 
//hace con fibona.next()
