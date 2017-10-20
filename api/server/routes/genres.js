var models = require('../models');

module.exports = [
{
    method: 'GET',
    path: '/api/genres',
    handler: function (request, reply) {
        models.Genre.findAll()
        .then(function(genres) {
            var data = {
                count: genres.length,
                genres: genres
            }
            reply(data).code(200);
        });
    }
},
{
    method: 'POST',
    path: '/api/genres',
    handler: function (request, reply) {
        models.Genre.create(JSON.parse(request.payload))
        .then(function(data) {
            reply(data).code(200);
        });
    }
}
];