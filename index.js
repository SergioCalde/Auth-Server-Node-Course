const express = require('express');
const cors = require('cors');

//Crear el servidor/App de express

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


app.listen( 4000, () => {
    console.log(`Servidor corriendo en puerto ${ 4000 }`)
});


