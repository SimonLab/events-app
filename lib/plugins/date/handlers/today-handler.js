'use strict';

const Wreck = require('wreck')

module.exports = function (request, reply) {

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate()

  Wreck.get(process.env.BASE_URL_API + '/events/' + year +'/' + month + '/' + day, {json: true}, function(err, res, payload) {

    return reply.view('home', {events: payload});
  })
}
