//hecho con azucar sintactico
//punto ahora sera una clase
//"password":"12345",
//funciona igual que un prototipo
class Punto{
    //constructor
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    moverX(x){
        this.x+=x
    }
    moverY(y){
        this.y+=y;
    }
    distancia(p){
        const x = this.x - p.x;
        const y = this.y - p.y;
        return Math.sqrt(Math.pow(x,2)+Math.pow(y,2))
    }
}
const p1 = new Punto(0,4);
const p2 = new Punto(3,0);

console.log(p1.distancia(p2));
console.log(p2.distancia(p1));
p1.moverX(10);
console.log(p1.distancia(p2));
p2.moverY(-4);
console.log(p2.distancia(p1));