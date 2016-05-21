'use strict';

module.exports = {
    home(req, res) {
        res.render('pages/home', { hello: 1, title: 'Панель управления'});
    }
};