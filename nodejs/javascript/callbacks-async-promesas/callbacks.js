//correr codigo asincrono
//con callbacks, se ejecutan en el futuro
//pero no se sabe cuando,, normalmente cuando sucede un evento, o un request

setTimeout(function callback(){
    console.log('pasaron 3 segundos')
},3000)
//300
// salida: el timeout da un retorno, y despues de un sec ejecuta lo que se le pidió
// 9
// ya paso 3 segundos
//// 
console.log('hola')

//otro ejemplo

setTimeout(function callback(){
    console.log('A')
},1000)
//cuello de botella que detiene la ejecucion porque traba la cola de ejecucion(queue)

for (let i =0;i<9999999999999999999999999999;i++){

} 

console.log('B')
//lo que sucede aca es que el for genera un cuello de botella
//porque javascript ejecuto el settimeout y luego hizo un for extremo
// y eso evita que el setTimeout se ejecute, las operaciones
//que necesite javascript que sean sincronas se puedan reducir al minimo
//posible, (settimeouts, entrada y salida de archivos, request externos)
//hay que delegarlo a una funcion asincrona