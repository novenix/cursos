'use strict'
let memoria={} ;
let cont=1;
function fibo(num){
    cont++
    if (memoria[num])return memoria[num]
    else if (num==1)return 0
    else if (num==2)return 1
    return memoria[num]=fibo(num-1,memoria)+fibo(num-2,memoria)
    
    
}
console.log(fibo(20))//0
console.log(cont)//0
// console.log(fibo(1))//0
// console.log(fibo(2))//1
// console.log(fibo(3))//1
// console.log(fibo(4))//2
// console.log(fibo(5))
// console.log(fibo(6))
// console.log(fibo(7))
// console.log(fibo(8))
// console.log(fibo(9))
// console.log(fibo(20))
