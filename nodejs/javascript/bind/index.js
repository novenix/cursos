'use strict'
//toggable es capacidad que pueda pasar entre 2 estados
//bind retorna una funcion con el contecto cambido
//de acuerdo al primer parametro que se le pase a bind
class Toggable{
    //inicializa el estado interno
    constructor(el){
        this.el=el;
        //asegurar que en el html dia off
        this.el.innerHTML = 'off';
        // asegurar que esta en of apagado con bool
        this.activated=false;
        //llamar on click cuando espicha boton
        //a bind se le pasa quien es el this que es el del constructor
        this.el.addEventListener('click',this.onClick.bind(this))
        this.onClick=this.onClick.bind(this);
        // o tambien
        // this.el.addEventListener('click',this.onClick)
        
    }
    //cambia estado interno, on of, llama toohle text
    // recibe evento
    onClick(ev){
        console.log('lo que tiene this en on click' ,this.onClick);
        this.activated=!this.activated;
        this.toggleText();

    }
    //cambia el texto
    toggleText(){
        this.el.innerHTML=this.activated ? 'on' : 'off';
    }

}
//obtiene la palabra boton del html
const button = document.getElementById('boton')
//
const miBoton =new Toggable(button)
//////bind tiene otra caracteristica
function saludar(nombre, apellido){
    console.log(`hola ${nombre} ${apellido} `)
}
console.log("nicolas","torres");
//la funcion bind es la siguiente
const saludarNicolases = saludar.bind(null,"nicolas");
//pone apellidos nomas
console.log(saludarNicolases("torres"))

console.log(saludarNicolases("patata"))