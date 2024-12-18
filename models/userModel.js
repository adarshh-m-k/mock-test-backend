let mongoose = require('mongoose')

let userSchema = mongoose.Schema({

    username: String,
    mobile: String,
    email: String,
    password: String

})

module.exports = mongoose.model('user', userSchema)