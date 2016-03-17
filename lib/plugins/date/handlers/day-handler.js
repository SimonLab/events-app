'use strict';

const Wreck = require('wreck')

module.exports = function (request, reply) {

  Wreck.get(process.env.BASE_URL_API + '/events/' + request.params.year +'/' + request.params.month + '/' + request.params.day, {json: true}, function(err, res, payload) {

    return reply.view('home', {events: payload});
  })
}
