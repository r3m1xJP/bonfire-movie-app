var models = require('../models');

models.Movie.belongsToMany(models.Actor, {through: 'MovieActor'});
models.Actor.belongsToMany(models.Movie, {through: 'MovieActor'});

models.Movie.belongsToMany(models.Genre, {through: 'MovieGenre'});
models.Actor.belongsToMany(models.Genre, {through: 'MovieGenre'});

module.exports = [
{
    method: 'GET',
    path: '/api/movies',
    handler: function (request, reply) {
        models.Movie.findAll()
        .then(function(movies) {
            var data = {
                count: movies.length,
                movies: movies
            }
            reply(data).code(200);
        });
    }
},
{
    method: 'GET',
    path: '/api/movies/{title}',
    handler: function (request, reply) {
        models.Movie.find({where: { Title: request.params.title }}).then(movie => {
            var data = {
                movie: movie
            }
            reply(data).code(200);
        });
    }
},
{
    method: 'POST',
    path: '/api/movies',
    handler: function (request, reply) {
        models.Movie.create(JSON.parse(request.payload))
        .then(function(data) {
            reply(data).code(200);
        });
    }
},
{
    method: 'POST',
    path: '/api/movies/genres',
    handler: function (request, reply) {
        models.MovieGenre.create(JSON.parse(request.payload))
        .then(function(data) {
            reply(data).code(200);
        }).catch(function (err) {
            reply(err).code(500);
        });;
    }
}
];