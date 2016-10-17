module.exports = function (req, res, next) {
    res.sendHttpError = function (err) {
        res.status(err.status);
        res.render('error', {error: err, stack: {}});
    };
    next();
};