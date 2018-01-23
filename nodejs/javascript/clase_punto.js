// crear objetos con option create

//crear objeto punto, haciendo de punto un objeto, ya no una funcion
const Punto ={
    init: function(x,y){
        this.x=x;
        this.y=y
    },
    moverX: function moverX(x){
        this.x+=x;
    },
    moverY: function moverY(y){
        this.y+=y
    },
    distancia: function distancia(p){
        const x= this.x - p.x;
        const y = this.y -p.y;
        return Math.sqrt(Math.pow(x,2)+Math.pow(y,2)).toFixed(2)
    }    
}
//crear objeto 1 y objeto 2
const p1 = Object.create(Punto);
const p2 = Object.create(Punto);
//poner valores necesarios al objeto
p1.init(0,4);
p2.init(3,0);

console.log(p1.distancia(p2))
p1.moverX(10);
console.log(p1.distancia(p2))
p2.moverY(-4)
console.log(p1.distancia(p2))
