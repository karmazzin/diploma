'use strict';

const main = require('../controllers/main');

module.exports = (router) => {
    router.get('/', (req, res) => {
        main.home(req, res);
    });
    router.get('/logout', (req, res) => {
        res.redirect('/');
    });
};