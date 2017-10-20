var models = require('../models');
var bcrypt = require('bcrypt');

module.exports = [
{
    method: 'POST',
    path: '/api/users/login',
    handler: function (request, reply) {
        var payload = JSON.parse(request.payload);
        models.User.findOne({ where: { Username: payload.username }}).then(user => {
            if (!user) {
                reply({message: "Invalid username."}).code(401);
            } else {
                bcrypt.compare(payload.password, user.Password, function(err, doesMatch){
                    var data = {};

                    if (doesMatch) {
                        user.Password = null;
                        
                        data = {
                            token: "**--valid--**",
                            user: user
                        }
                    } else {
                        data = {
                            token: null,
                            user: null
                        }
                    }
                    reply(data).code(200);
                });
            }
        });
    }
},
{
    method: 'GET',
    path: '/api/users/{id}',
    handler: function (request, reply) {
        models.User.findById(request.params.id).then(user => {
            var data = {
                user: user
            }
            reply(data).code(200);
        });
    }
}
];