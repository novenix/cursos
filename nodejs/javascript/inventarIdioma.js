//inventar idioma manipulando strings
//regla1:se quita la r: palabra pisotear se vuelve pisotea
//regla2:si inicia con z se pone pe al final
//      zorro = sorrope
        //zarpar= parzar
//regla3: si la palabra traducida tiene mas de 10 letras
        // abecedario=abece-dario
//regla4: si la original palindromas se escriben en mayusculas y minusculas
        //y las reglas anteriores no cuentan
        //sometemos=SoMeTeMoS

let platzom= (str)=>{
    var translation=str;
    
    if (str.toLowerCase().endsWith('ar')){
        translation=str.slice(0,-2);
    }
    if (str.toLowerCase().startsWith('z')){
            translation+='pe';
    }
    const lon=translation.length;
    if (lon>=10){
            const m1=translation.slice(0,Math.round(lon/2));
            const m2= translation.slice(Math.round(lon/2));
            translation=`${m1}-${m2}`;
    }
    //los arrays si tienen reverse, los strings no
    let reverse = str=> str.split('').reverse().join('');
    //funcion de pasar minusculas y mayusculas la palabra
    function minusMayus(str){
            const lenght=str.length;
            //vacio
            let translation='';
            //si el valor es mayuscula o minuscula para devolver
            let capitalize=true;
            for(var i =0;i<lenght;i++){
                    const letter=str.charAt(i);
                    //condicional en una sola linea
                    //capitalize es true entonces paselo a mayus, si no a minus
                    translation+= capitalize ? letter.toUpperCase() : letter.toLowerCase();        
                    capitalize=!capitalize;
            }

            return translation;
    }

    if(str==reverse(str) ){
            return minusMayus(str)
    }

    return translation;
    
}

console.log(platzom('programar'));//program
console.log(platzom('zorro'));//zorrope
console.log(platzom('zarpar'));//zarppe
console.log(platzom('abecedario'));//abece-dario
console.log(platzom('sometemos'));//SoMeTeMoS