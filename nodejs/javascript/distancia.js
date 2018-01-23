//calcular distancia entre dos puntos
//en el plano
//poner los puntos como objetos
const p1={
    x:0,
    y:4,
    //aumentar poscision en x,this es el elemento de la funcion flecha
    movex (rx){this.x+=rx},
    movey (ry){this.y+=ry}
}
const p2={
    x:3,
    y:0,
    movex : function (rx){this.x+=rx},
    movey :function(ry){this.y+=ry}

}
//recibe los 2 objetos
function distancia(p1,p2){
    //obteniendo los parametros de el objeto
    const x= p1.x - p2.x;
    const y= p1.y - p2.y;
    //to fixed, redondear decimales
    return (Math.sqrt(Math.pow(x,2)+Math.pow(y,2))).toFixed(2)
}
//agremar metodos para interactuar con objetos
