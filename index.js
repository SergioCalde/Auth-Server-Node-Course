const express = require('express');
const cors = require('cors');
require('dotenv').config();

//Crear el servidor/App de express

// console.log( process.env );

const app = express();

// CORS

app.use( cors() );

// Lectura y parseo del body

app.use( express.json() );


// GET
// app.get('/', (req, res, next) => {

//     res.json({
//         ok: true,
//         msg: 'Todo salio bien',
//         uid: 1234
//     });

// });

// Rutas 
app.use( '/api/auth', require( './routes/auth' ) );


app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`)
});


