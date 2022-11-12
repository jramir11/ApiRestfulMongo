//define bdd
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/dbApiRestful', { useNewUrlParser: true })
module.exports=mongoose;