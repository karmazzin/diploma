'use strict';

const main = require('../controllers/main');
const api = require('../models/UserApi');

module.exports = (router) => {
    router.get('/', (req, res) => {
        if (!req.session.user) return res.redirect('/login');

        main.home(req, res);
    });
    router.get('/logout', (req, res) => {
        res.redirect('/');
    });
    router.get('/login', (req, res) => {
        main.login(req, res);
    });
    router.post('/login', (req, res, next) => {
        if (req.session.user) return res.redirect('/');

        api.checkUser(req.body)
            .then(function(user){
                if(user){
                    req.session.user = {id: user._id, name: user.name};
                    res.redirect('/');
                } else {
                    return next(error);
                }
            })
            .catch(function(error){
                return next(error)
            })
    });
};