'use strict';

const Hapi = require('hapi');
const Handlebars = require('handlebars');
const Vision = require('vision');
const Inert = require('inert');

const Home = require('./plugins/home/home');
const DateEvents = require('./plugins/date/date');
const Assets = require('./plugins/assets/assets');

exports.init = function (port, next) {

  var server = new Hapi.Server();
  server.connection({port: port});

  var plugins = [
    Inert,
    Vision,
    Assets,
    Home,
    DateEvents
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
      layoutPath: 'layout',
      partialsPath: 'partials'
    });

    server.start(function (err) {
      return next(err, server);
    });
  });
};
