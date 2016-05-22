'use strict';

module.exports = {
    home(req, res) {
        res.render('pages/home', { hello: 1, title: 'Панель управления'});
    },
    login(req, res) {
        res.render('pages/login', { hello: 1, title: 'Вход в систему', layout: false});
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