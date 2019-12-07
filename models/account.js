const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const Account = new Schema({
    username: String,
    gender: String,
    age: Number,
    email: String,
    mobile_number: Number,
    address_line_1: String,
    address_line_2: String,
    street: String,
    city: String,
    state: String,
    zipcode: Number,
    password: String
});

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('accounts', Account);
