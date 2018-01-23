//fechas javascript
//calcular mi fecha de nacimiento
//8 agosto 1997}//pasa parametros como el año, y mes -1 , dia
const nacimento=new Date(1997,7,8);

//cuantos dias pasaron desde mi nacimiento
const hoy = new Date();

//en milisegundos
const tiempo_pasado=hoy -nacimento;

const tiempo_seg = tiempo_pasado/1000
const tiempo_min=tiempo_seg/60
const tiempo_horas=tiempo_min/60;
const tiempo_dias=tiempo_horas/24;
const tiempo_sem=tiempo_dias/7
const tiempo_anos= tiempo_sem/52;


//que dia cae cumpleaños
// get full year nos da el año actual
//argumentos:lo que esta dentro de date
//parametros: lo que recibe en una funcion
const prox_cumple=new Date(hoy.getFullYear(),nacimento.getMonth(),nacimento.getDate());
const dias=["domingo","lunes","martes","miercoles","jueves","viernes","sabado" ]
const diaEspanol=dias[prox_cumple.getDay()];
nacimento

hoy

tiempo_pasado;

tiempo_seg 

tiempo_min

tiempo_horas


prox_cumple