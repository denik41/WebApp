var User = require('../models/user').User;

module.exports = function (app) {
    app.get('/login', function (req, res) {
        res.render('login');
    });

    app.post('/logout', function (req, res) {
        req.session.destroy();
        res.redirect('/');
    });
    app.post('/login', function (req, res) {
        User.findOne({login: req.body.login}, function (error, user) {
            if (error) return next(error);
            if (user) {
                if (user.checkPassword(req.body.password)){
                    req.session.user = user._id;
                    res.redirect('/');
                }
                else res.status(403).end();
            }
            else res.status(403).end();
        })
    })
};