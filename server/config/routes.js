// routes file. This file is connected with the functionallity which is in the controllers task.js

var pokemons = require('../controllers/pokemons.js');

module.exports = function(app){

    // index
    app.get('/allPokemons', function(req, res){
        pokemons.index(req.res);
    })


}