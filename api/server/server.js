'use strict';

const Hapi = require('hapi');
const models = require('./models');

const server = new Hapi.Server();
server.connection({ port: 3000, routes: { cors: true } });

server.route(require('./routes/actors'));
server.route(require('./routes/collections'));
server.route(require('./routes/genres'));
server.route(require('./routes/movies'));
server.route(require('./routes/users'));

models.sequelize.sync().then(function() {
    server.start((err) => {
        if (err) {
            throw err;
        }
        console.log(`Server running at: ${server.info.uri}`);
    });
});