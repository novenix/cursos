'use strict'
//recoger parametros desde la consola, todos
var args =process.argv.slice(2);
var num1= parseFloat(args[0])
var operation = args[1];
var num2= parseFloat(args[2])
var rta="\n introduce parametros \n"
if (args.length==3){
    switch (operation){
        case "+":
            rta = "suma " + parseFloat(num1+num2);
            break;
        case "-":
            rta = "resta " + parseFloat(num1-num2);
            break;
        case "x":
            rta = "mult " + parseFloat(num1*num2);
            break;
        case "/":
            rta = "div " + parseFloat(num1/num2);
            break;
    }

}
//muestra en pantalla operation
console.log(operation);
//muestra en pantalla args en un array
console.log(args);
//muestra en pantalla num1
console.log(num1);
// muestra ell resultado en pantalla
console.log(rta)