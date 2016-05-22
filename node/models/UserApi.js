const crypto = require('crypto');
const User = require('./User.js');

// User API
exports.createUser = (userData) => {
    const user = {
        name: userData.name,
        email: userData.email,
        password: hash(userData.password)
    };
    return new User(user).save()
};

exports.getUser = (id) => {
    return User.findOne(id)
};

exports.checkUser = (userData) => {
    return User
        .findOne({email: userData.email})
        .then(function (doc) {
            if (doc.password == hash(userData.password)) {
                return Promise.resolve(doc)
            } else {
                return Promise.reject("Error")
            }
        })
};

function hash(text) {
    return crypto.createHash('sha1')
        .update(text).digest('base64')
}
