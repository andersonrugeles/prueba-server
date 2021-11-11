const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
// inicio
const app =express();

//configuracion
app.set('port',process.env.PORT || 5000);

app.set('views',path.join(__dirname,'views'));

app.engine('.hbs', exphbs({
    defaultLayout:'main',
    layoutDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}));
app.set('view engine','.hbs');


app.set('json spaces',2);


//MIDDELWARE - peticiones
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


//variables globales
app.use((req,res,next) =>{
    next();
});

//rutas
app.use('/',require('./routes/api/registroUser'));
app.use('/',require('./routes/api/consultarUser'));
app.use('/',require('./routes/api/editarUser'));
app.use('/',require('./routes/api/eliminarUser'));


app.get('/',(req,res)=>res.send("Servidor Montado"));


// public - navegador puede acceder
app.use('/static',express.static(path.join(__dirname,'public')));

//iniciar servidor
app.listen(app.get('port'),()=>{
    console.log('server on port',app.get('port'));
});