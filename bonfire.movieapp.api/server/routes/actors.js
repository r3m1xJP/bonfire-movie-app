var models = require('../models');

module.exports = [
{
    method: 'GET',
    path: '/api/actors',
    handler: function (request, reply) {
        models.Actor.findAll()
        .then(function(actors) {
            var data = {
                count: actors.length,
                actors: actors
            }
            reply(data).code(200);
        });
    }
}
];