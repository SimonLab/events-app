'use strict';

const TodayHandler = require('./handlers/today-handler');
const DayHandler   = require('./handlers/day-handler');

exports.register = function (server, options, next) {

  server.route(
    [
      {
        method: 'GET',
        path: '/events/today',
        config: {
          description: 'return today\'s events',
          handler: TodayHandler
        }
      },

      {
        method: 'GET',
        path: '/events/{day}/{month}/{year}',
        config: {
          description: 'return today\'s events',
          handler: DayHandler
        }
      }
    ]
  );

  return next();
};

exports.register.attributes = {
  name: 'Today'
};
