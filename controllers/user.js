const User = require("../models/user");

const user = {
    getAdmin(req, res, next) {
        User.find((err, user) => {
            res.json(user);
        })
        .catch(next);
    },

    add(req, res, next) {
        User.create(req.body)
        .then(user => {
            res.send(user);
        })
        .catch(next);
    },

    update(req, res, next) {
        User.findByIdAndUpdate({
            _id: req.params.id
        }, req.body)
        .then(user => {
            res.send(user);
        })
        .catch(next);
    },

    remove(req, res, next) {
        User.findByIdAndRemove({
            _id: req.params.id
        }, req.body)
        .then(user => {
            res.send(user);
        })
        .catch(next);
    }
};

module.exports = user;
