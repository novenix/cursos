//scope de las variables:(alcance y accedes)
//clousures: recuerdan el scope en el que fueron creadas

//sin scope:
    var nombre="nicolas";
    //socpe global
    function saludar10(nombre){
        for (var i =0;i<10;i++){var nombre= "eric"}
        console.log(`el valor de i es : ${i}`)
            
        
        console.log(`${nombre} saludos`);
    }
    saludar10("eric")
    console.log(`la global tiene valor ${nombre}`)
//con scope de bloque:
    //solo permite tener scope en el bloque en el que está
   
    
    function saludar10(){
        const nombre="nicolas";
        for (let i =0;i<10;i++){
            console.log(`${nombre} saludos`);
        console.log(`el valor de i es : ${i}`)   
        }      
    }
    saludar10()
