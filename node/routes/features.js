'use strict';

const main = require('../controllers/main');

module.exports = (router) => {
    router.get('/sensors', (req, res) => {
        main.sensors(req, res);
    });
    router.get('/graphics', (req, res) => {
        main.graphics(req, res);
    });
    router.get('/schedule', (req, res) => {
        main.schedule(req, res);
    });
    router.get('/devices', (req, res) => {
        main.devices(req, res);
    });
};