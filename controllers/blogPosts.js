const BlogPost = require("../models/blogPost");

const blogPosts = {
    getAll(req, res, next) {
        BlogPost.find((err, posts) => {
            res.json(posts);
        })
        .catch(next);
    },

    add(req, res, next) {
        BlogPost.create(req.body)
        .then(post => {
            res.send(post);
        })
        .catch(next);
    },

    update(req, res, next) {
        BlogPost.findByIdAndUpdate({
            _id: req.params.id
        }, req.body)
        .then(post => {
            res.send(post);
        })
        .catch(next);
    },

    remove(req, res, next) {
        BlogPost.findByIdAndRemove({
            _id: req.params.id
        }, req.body)
        .then(post => {
            res.send(post);
        })
        .catch(next);
    }
};

module.exports = blogPosts;
