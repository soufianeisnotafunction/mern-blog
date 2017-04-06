const Admin = require("../models/admin");

const admin = {
    getAdmin(req, res, next) {
        Admin.find((err, user) => {
            res.json(user);
        })
        .catch(next);
    },

    add(req, res, next) {
        Admin.create(req.body)
        .then(user => {
            res.send(user);
        })
        .catch(next);
    },

    update(req, res, next) {
        Admin.findByIdAndUpdate({
            _id: req.params.id
        }, req.body)
        .then(user => {
            res.send(user);
        })
        .catch(next);
    },

    remove(req, res, next) {
        Admin.findByIdAndRemove({
            _id: req.params.id
        }, req.body)
        .then(user => {
            res.send(user);
        })
        .catch(next);
    }
};

module.exports = admin;
