const mongoose = require('../config/mongoose')

//schema de trabajo
const movieSchema = new mongoose.Schema(
    {   title: { type: String, required: [true, 'Favor de Ingresar Titulo de Pelicula'] },
        description: { type: String, default:'' },
        completed:{type:Boolean}
    }, { timestamps: true }
);
const dbMovie = mongoose.model('data', movieSchema);

module.exports = dbMovie;