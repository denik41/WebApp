var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var config = require('./config');
var mongoose = require('./lib/mongoose');
var session = require('express-session');
var HttpError = require('./error').HttpError;

var app = express();

// view engine setup
app.engine('ejs', require('ejs-locals'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

var MongoStore = require('connect-mongo')(session);
app.use(session({
    secret: config.get('session:secret'),
    key: config.get('session:key'),
    cookie: config.get('session:cookie'),
    store: new MongoStore({mongooseConnection: mongoose.connection}),
    resave: true,
    saveUninitialized: true
}));

app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./middleware/sendHttpError'));
app.use(require('./middleware/loadUser'));

app.use('/', express.static(path.join(__dirname, 'public')));
// require('./routes/index')(app);
// require('./routes/reg')(app);
// require('./routes/login')(app);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new HttpError(404, 'Сторінку не знайдено');
    next(err);
});

// error handlers

app.use(function (err, req, res, next) {
    if (typeof err == 'number') {
        err = new HttpError(err);
    }
    if (err instanceof HttpError) {
        res.sendHttpError(err);
    } else {
        res.status(err.status || 500);
        if (app.get('env') === 'development') {
            res.render('error', {
                error: err,
                stack: err.stack
            });
        } else {
            err = new HttpError(500);
            res.sendHttpError(err);
        }
    }
});

module.exports = app;
