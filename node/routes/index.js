'use strict';

module.exports = (router) => {
    require('./main')(router);
    require('./features')(router);
};