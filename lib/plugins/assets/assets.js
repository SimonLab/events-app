'use strict';

exports.register = function (server, options, next) {

  server.route({
    method: 'GET',
    path: '/assets/{params*}',
    config: {
      description: 'Assets',
      handler: {
        directory: {
          path: 'lib/assets'
        }
      }
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'Assets'
};
