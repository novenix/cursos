//los prototipos son como las clases
//para no duplicar el mismo codigo
//crean objetos utilizando palabra new

//calcular distancia entre dos puntos
//en el plano
//poner los puntos como objetos

//para modificar el prototipo en consola de todos los objetos es 
//p1.__proto__.moverX=function moverX(){let x=hola}
//constructor del proto(objeto), es una funcion
function Punto(x,y){
    //constructor
    this.x=x
    this.y=y

}
//agregar metodos a un objeto, el metodo mover x
//si le digo this, el sabe que es el objeto p1 o p2
//se agregan a los objetos que se creen de Punto.
Punto.prototype.moverX= function moverX(x){
    this.x+=x
}
Punto.prototype.moverY= function moverY(y){
    this.y+=y
}
//recibe el punto en forma p1.distancia(p2)
//el nombre que importa es el de la variable
Punto.prototype.distancia=function distancia(p){
    const x = this.x-p.x;
    const y = this.y - p.y;
    return (Math.sqrt(Math.pow(x,2)+Math.pow(y,2))).toFixed(2)
}

const p1=new Punto(0,4);
const p2= new Punto(3,0);

console.log(p1.distancia(p2))
p1.moverX(10);
console.log(p1.distancia(p2))
p2.moverY(-4)
console.log(p1.distancia(p2))

