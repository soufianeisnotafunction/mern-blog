const express = require('express');
const userRouter = express.Router();
const user = require('../controllers/user');

// GET & posted
userRouter
  .route("/user")
  .get(user.getAdmin)
  .post(user.add);

// PUT & DELETE
userRouter
  .route("/user/:id")
  .put(user.update)
  .delete(user.remove);


module.exports = userRouter;
