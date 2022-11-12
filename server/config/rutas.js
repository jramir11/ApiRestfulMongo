module.exports = function (app) {
    const express = require('express');

    app.use(express.urlencoded({extended: true}));
    app.use(express.json());

    const controlador = require('../controller/controllers')

    app.get('/getMovie', function (req, res) {
        controlador.getMovie(req,res);
    });

    app.get('/getMovieId', function (req, res) {
        controlador.getMovieId(req,res);
    });

    app.post('/newMovie', function (req, res) {
        controlador.newMovie(req,res);
    });
     
    app.put('/putMovie', function (req, res) {
        controlador.putMovie(req,res);
    });

    app.delete('/delMovie', function (req, res) {
        controlador.delMovie(req,res);
    });
}