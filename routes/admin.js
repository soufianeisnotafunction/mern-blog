const express = require('express');
const adminRouter = express.Router();
const admin = require('../controllers/admin');

// GET
adminRouter
  .route("/admin")
  .get(admin.getAdmin)
  .post(admin.add);

// PUT
adminRouter
  .route("/admin/:id")
  .put(admin.update);


module.exports = adminRouter;
