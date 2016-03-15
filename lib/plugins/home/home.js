'use strict';

const HomeHandler = require('./handlers/home-handler');

exports.register = function (server, options, next) {

  server.route({
    method: 'GET',
    path: '/',
    config: {
      description: 'return home page',
      handler: HomeHandler
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'Home'
};
