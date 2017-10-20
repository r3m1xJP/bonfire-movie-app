var models = require('../models');

models.Collection.belongsToMany(models.Movie, {through: 'CollectionMovie'});
models.Movie.belongsToMany(models.Collection, {through: 'CollectionMovie'});

module.exports = [
{
    method: 'GET',
    path: '/api/collections',
    handler: function (request, reply) {
        models.Collection.findAll()
        .then(function(collections) {
            var data = {
                count: collections.length,
                collections: collections
            }
            reply(data).code(200);
        });
    }
},
{
    method: 'GET',
    path: '/api/collections/user/{userId}',
    handler: function (request, reply) {
        models.Collection.findAll({ 
            include: [{
                model: models.Movie
            }], 
            where: { UserId: request.params.userId }})
        .then(function(collections) {
            var data = {
                count: collections.length,
                collections: collections
            }
            reply(data).code(200);
        });
    }
},
{
    method: 'POST',
    path: '/api/collections',
    handler: function (request, reply) {
        models.Collection.create(JSON.parse(request.payload))
        .then(function(data) {
            reply(data).code(200);
        });
    }
},
{
    method: 'POST',
    path: '/api/collections/movies',
    handler: function (request, reply) {
        models.CollectionMovie.create(JSON.parse(request.payload))
        .then(function(data) {
            reply(data).code(200);
        }).catch(function (err) {
            reply(err).code(500);
        });;
    }
}
];