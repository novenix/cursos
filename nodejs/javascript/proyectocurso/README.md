//md= markdown
#nicsom
nicsom es un idioma inventado para el curso de javascript revisa mi [git](https://github.com/novenix/nicsom)

## Descrimcion del idioma
-si la palabra termina con "ar",se le quitan esas 2 letras
-si la palabra inicia con Z, se le añade "pe" al final
-si la palabra traducida tiene 10 o mas letras, se debe unir en dos por la mitad y unir con un guion medio
-si la palabra original es un palindromo , ninguna regla anteriro cuenta pero se intercala las letras entre mayusculas y minusculas
## Instalación 
npm install platzom
```
npm install platzom --save
```
## Uso
```
import platzom from 'platzom'

platzom("programar")//program
platzom("zorro")//zorrope
platzom("zarpar")//zarppe
platzom("abecedario")//abece-dario
platzom("sometemos")//SoMeTeMoS
```
## Creditos
-[platzi](platzi.com)
-Nicolas Torres

##Licence
[MIT](opensource.com/licences/MIT)


## librerias de npm 
"dependencies": {
    "babel-cli"
    "babel-preset-env" save,dev
    
    "mocha" para pruebas, save,dev
    "chai" para tomar valores esperados dave, dev

## recordatorio para mi
instalar babel con npm i --save -dev babel-cli
añadir a scripts de package :"build": "babel src/nicsom.js -d dist". dist es la carpeta a compartir

crear archivo .babelrc en la carpeta principal

correr npm i babel-preset-env --save -dev

para detectar las cosas que tiene que transpilar
para correr finalmente en la carpeta corremos

npm run build(script de babel)

modificar el archivo principal de package.json, ponerle la ruta de dist y ese archivo principal("main": "dist/src/platzom.js",)

________________
mocha y chai son lo que permiten hacer las unidades de prueba,
    con el expect y . to equals y tambien it()

##gitnore
//archivo para que git no tenga en cuenta ciertos directorios que nono 
//hacen parte del code
