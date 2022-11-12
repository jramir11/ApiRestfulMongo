comandos en VSC:

npm install express mongoose cors   = instala los componentes de trabajo

nodemon server.js   = para levantar la API y que se este ejecutando (escuchando)
    puerto = 800

para ejecutar en POSTMAN :

http://localhost:8000/getMovie  : para obtener Todas las peliculas de la bdd

http://localhost:8000/getMovieId : se obtiene solo la pelicula indicada en el parametro
{
"_id": "636ed18831bf97e2a65322af"
}

http://localhost:8000/newMovie : para CREAR un nuevo registro de peliculas
{   "title": "superman",
        "description": "el nacimiento del super",
        "completed":"true"
}

http://localhost:8000/updMovie : para Modificar una pelicula
{
        "_id": "636ed18831bf97e2a65322af",
        "description": "varios tomos",
        "title": "Spiderman",
        "completed": true
}

http://localhost:8000/delMovie  : elimina una pelicula
{
        "_id": "636e9f560052e694cd3be3c7"
}
