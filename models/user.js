var mongoose = require('../lib/mongoose');

var Schema = mongoose.Schema;

var schema = new Schema({
    login: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        unique: false,
        required: true
    },
    name: {
        type: String,
        unique: false,
        required: true
    },
    surname: {
        type: String,
        unique: false,
        required: true
    },
    telephone: {
        type: String,
        unique: false,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    created: {
        type: Date,
        default: Date.now()
    }
});

schema.methods.checkPassword = function (password) {
    return password == this.password;
};

exports.User = mongoose.model('User', schema);
