const express = require('express');
const router = express.Router();
const blogPosts = require('../controllers/blogPosts');

// GET & POST
router
  .route("/posts")
  .get(blogPosts.getAll)
  .post(blogPosts.add);

// PUT & DELETE
router
  .route("/posts/:id")
  .put(blogPosts.update)
  .delete(blogPosts.remove);

module.exports = router;
