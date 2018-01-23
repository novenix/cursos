
export default function platzom( str){
    let translation=str;
    
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

       