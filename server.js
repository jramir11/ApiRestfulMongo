const express = require('express');
const app = express();

const routes = require('./server/config/rutas')(app)



app.listen(8000, () => {
    console.log('Escuchando http://localhost:8000/getMovie en puerto 8000');
})