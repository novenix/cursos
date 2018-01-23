// aqui estará la configuracion de express
//cargar body parser
var bodyParser=require('body-parser')
//cargar express
// crear un server
// require = import
//import de el paquete express
var express= require('express')
//hace uso de express
var app = express()

//cargar ruta del api, todo lo que este en routes
var api= require('./routes/favorito')

//config bodyparser middleware, se hace lo que se hace aqui primero
app.use(bodyParser.urlencoded({extended:false}))
//lo trata como json y devuelve como objeto
app.use(bodyParser.json());
//middleware, next permite salir de la funcion cuando acabe de hacerse
//permite usar metodos put y delete en clientes rest (post put etc)
app.use((req,res,next)=>{
    //configurar los headers,* significa que cualquier url puede hacer peticiones
    res.header('Acces Control Allow-Origin','*')
    //headers a llegar
    res.header('Acces Control Allow-Headers','X-API-KEY,Origin,X-Requestes-With,Content-Type,Accept,Acces-Control-Request-Method')
    //metodos http que pueden legar
    res.header('Acces Control Allow-Methods','GET,POST,OPTIONS,PUT,DELETE')
    //
    res.header(' Allow','GET,POST,OPTIONS,PUT,DELETE')
    //lanzar funcion next para que salga de la funcion
    next()

})
//usarlo dentro de express para que carguen las rutas
//prefijo ./api , y carga el objeto que devuelva api
app.use('/api',api)

// para usar un fichero dentro de otro hay quue exportar
module.exports=app;
