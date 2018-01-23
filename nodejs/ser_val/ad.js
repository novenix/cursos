//para sacar del json
function EstadosO(id){
    var conts = fs.readFileSync("ProcesosDelSistema.json"); 
    var jsonCont = JSON.parse(conts);
    var estado = jsonCont.Estados.filter((obj)=>{
            return obj.ProcesoSistema == id;
        })

    return estado[0]; 

}
var fs = require("fs"); 
var jsonFormat = require('json-format');

