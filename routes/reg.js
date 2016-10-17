var User = require('../models/user').User;

module.exports = function (app) {
    app.get('/reg', function (req, res, next) {
        res.render('reg');
    });
    app.post('/reg', function (req, res, next) {
        User.findOne({login: req.body.login}, function (err, user) {
            if (err) return next(err);
            if (user) res.status(302).end();
            else {
                User.findOne({email: req.body.email}, function (err, user) {
                    if (err) return next();
                    if (user) res.status(302).end();
                    else {
                        var user = new User({
                            password: req.body.password,
                            login: req.body.login,
                            name: req.body.name,
                            surname: req.body.surname,
                            email: req.body.email,
                            telephone: req.body.telephone
                        });

                        user.save(function (err, user) {
                            if (err) next(err);
                            req.session.user = user._id;
                            res.end();
                        });
                    }
                })
            }
        });
    });
    // app.post('/reglog', function (req, res) {
    //
    // })
};