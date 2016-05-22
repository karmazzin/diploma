'use strict';

module.exports = {
    home(req, res) {
        res.render('pages/home', { hello: 1, title: 'Панель управления'});
    },
    sensors(req, res) {
        res.render('pages/home', { hello: 1, title: 'Датчики'});
    },
    graphics(req, res) {
        res.render('pages/home', { hello: 1, title: 'Графики'});
    },
    schedule(req, res) {
        res.render('pages/home', { hello: 1, title: 'Расписания'});
    },
    devices(req, res) {
        res.render('pages/home', { hello: 1, title: 'Устройства'});
    }
};