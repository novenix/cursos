//iteradores permiten hacer listas infinitas
//esto es un clousure,devolvemos funcion que recuerda 
//las variables que pertenecian a su entorno cuando
//fueron creadas
//en este caso recuerda a y b, vada vez que las llama,
//la funcion tiene los valores que tienen las variables
//actualmente
function fibon(){
    let a=0,b=1;
    //retorna objeto, con propiedad next que es un metodo
    //clousure
    return{
        next: function(reset){
            if (reset) a=0,b=1
            let f=a;
            a= b;
            b=f+b;
            return {value:f,done:false}
        }
    }
}
const fibo=fibon()
//para obtener los sibientes numeros de la lista
//tiene metodo next
//next: objeto con valor, y dice si termina o no 
fibo.next().value//0
fibo.next().value//1
fibo.next().value//1
fibo.next().value//2
fibo.next().value//3
fibo.next().value//5

//valor de next
// value
// //true o false si ya termino el iterador
// done



//////////////////////o tambien 
function fibon(){
    let a=0,b=1;
    //retorna objeto, con propiedad next que es un metodo
    //clousure
    return{
        next: function(){
            let f=a;
            a= b;
            b=f+b;
            return {value:f,done:false}
        }
    }
}
const fibo = {}
//si usamos[] nos referimos a una propiedad de objeto
//para interpretar como iterador, propio de jsavascript
fibo[Symbol.iterator]=fibon
let i=0
for (let value of fibo ){
    console.log(value)
    i++
    if (value>20)break
}