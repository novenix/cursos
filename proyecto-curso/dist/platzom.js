'use strict';

Object.defineProperty(exports, "__esModule", {
        value: true
});
exports.default = platzom;
function platzom(str) {
        var translation = str;

        if (str.toLowerCase().endsWith('ar')) {
                translation = str.slice(0, -2);
        }
        if (str.toLowerCase().startsWith('z')) {
                translation += 'pe';
        }
        var lon = translation.length;
        if (lon >= 10) {
                var m1 = translation.slice(0, Math.round(lon / 2));
                var m2 = translation.slice(Math.round(lon / 2));
                translation = m1 + '-' + m2;
        }
        //los arrays si tienen reverse, los strings no
        var reverse = function reverse(str) {
                return str.split('').reverse().join('');
        };
        //funcion de pasar minusculas y mayusculas la palabra
        function minusMayus(str) {
                var lenght = str.length;
                //vacio
                var translation = '';
                //si el valor es mayuscula o minuscula para devolver
                var capitalize = true;
                for (var i = 0; i < lenght; i++) {
                        var letter = str.charAt(i);
                        //condicional en una sola linea
                        //capitalize es true entonces paselo a mayus, si no a minus
                        translation += capitalize ? letter.toUpperCase() : letter.toLowerCase();
                        capitalize = !capitalize;
                }

                return translation;
        }

        if (str == reverse(str)) {
                return minusMayus(str);
        }

        return translation;
}