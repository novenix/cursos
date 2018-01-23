'use strict'
//caso base
function fibo(num){
    switch(num){
        case 1:
            return 0
        case 2:
            return 1
        }
        return fibo(num-1)+fibo(num-2)

}
//fibo es la suma de los 2 nums anteriores
console.log(fibo(1))//0
console.log(fibo(2))//1
console.log(fibo(3))//1
console.log(fibo(4))//2
console.log(fibo(5))
console.log(fibo(6))
console.log(fibo(7))
console.log(fibo(8))
console.log(fibo(9))
