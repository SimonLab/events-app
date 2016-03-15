'use strict';

const Hapi = require('hapi');
const Handlebars = require('handlebars');
const Vision = require('vision');

var Home = require('./plugins/home/home');

exports.init = function (port, next) {

  var server = new Hapi.Server();
  server.connection({port: port});

  var plugins = [
    Vision,
    Home,
  ];

  server.register(plugins, function (err) {

    if (err) {
      next(err)
    }

    server.views({
      engines: {
        html: Handlebars
      },
      relativeTo: __dirname + '/../views/',
      path: '.',
      layout: 'default',
      layoutPath: 'layout'
    });

    server.start(function (err) {
      return next(err, server);
    });
  });
};
