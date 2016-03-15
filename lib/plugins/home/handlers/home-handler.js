'use strict';

const Wreck = require('wreck')

module.exports = function (request, reply) {

  Wreck.get(process.env.BASE_URL_API + '/events/list', {json: true}, function(err, res, payload) {
    console.log(payload.title);
    return reply.view('home', {events: payload});
  })
}
