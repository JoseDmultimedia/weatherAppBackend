//Se agregan los require de paquetes, dependecias ...

const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');


//db connection 

mongoose.connect('mongodb://localhost/clima')
.then(db => console.log("db conectada"))
.catch(error => console.log(error));


//Settings

app.set('port', 8080);


//Ultilities

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());


//Routes del servicio

app.use(require('./routes/weatherRoutes.js'));

//Start server

app.listen(app.get('port'), ()=>{
    console.log("Servidor funcionando");
});