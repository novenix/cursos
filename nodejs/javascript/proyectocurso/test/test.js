//llama el modulo de test
const expect =require('chai').expect
//el ('..') ayuda a requerir el main de la carpeta anterior
//default: si no se soprorta ecmascript 2015, ya que exporta una funcion 
const platzom=require('../dist/platzom').default
//describir los test, que tienen que devolver
//(test sobre quien, funcion de los test)
describe('#platzom',function(){
    //it(describir, funcion para correr test)
    it('-si la palabra termina con "ar",se le quitan esas 2 letras',function(){
        const translation= platzom("programar")
        expect(translation).to.equal("program")
    })
    it('-si la palabra inicia con Z, se le añade "pe" al final',function(){
        const translation= platzom("zorro")
        const translation2= platzom ("zarpar")

        expect(translation).to.equal("zorrope")
        expect(translation2).to.equal("zarppe")

    })
    it('-si la palabra traducida tiene 10 o mas letras, se debe unir en dos por la mitad y unir con un guion medio',function(){
        const translation=platzom ("abecedario")
        expect(translation).to.equal("abece-dario")

    })
    it('-si la palabra original es un palindromo , ninguna regla anteriro cuenta pero se intercala las letras entre mayusculas y minusculas',function(){
        const translation= platzom("sometemos")
        expect(translation).to.equal("SoMeTeMoS")
    })
    

    
})