const dbMovie = require('../model/datos');


module.exports = {
    getMovie: async function (req, res) {
        const data = await dbMovie.find();
        res.json(data);
    },

    getMovieId: async function (req, res) {
        let id = req.body._id;
        const data = await dbMovie.find({ _id: id })
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
        
    newMovie: async function (req, res) {
        const { title, description, completed } = req.body
        const data = new dbMovie()
        data.title = title
        data.description = description
        data.completed = completed
        data.save()
        .then( data => res.json(data))
        .catch(err => res.json(err));
    },

    putMovie: async function (req, res) {
        let id = req.body._id;
        dbMovie.updateOne({_id: id},{
            title: req.body.title,
            description: req.body.description,
            completed: req.body.completed})
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    
    delMovie: async function (req, res) {
        let id = req.body._id;
        dbMovie.remove({ _id: id })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    }
}
