const express    = require('express');
const app        = express();
const bodyParser = require('body-parser');
const mongoose   = require('mongoose');
const morgan     = require('morgan');
const postRoute  = require('./routes/blogPosts');
const AdminRoute = require('./routes/admin')
const port       = process.env.port || 8080;

// db connection

mongoose.connect('mongodb://admin:root@ds149030.mlab.com:49030/blog');
mongoose.Promise = global.Promise; // mongoose Promise is deprecated

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'));
}
app.use(express.static('build'));


// App config (req.body parsing)

app.use(
  bodyParser.urlencoded({
    extended:true
  })
);
app.use(bodyParser.json());

//==========CONFIG ACCESS HANDLE CORS REQUESTS =========//
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET , POST");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With , content-type , Authorization"
  );
  next();
});

//==== LOGS OF ALL CONSOLE'S REQUESTS ======//
app.use(morgan("dev"));

//initialize routes
// app.use("/api", [postRoute , AdminRoute]);
app.use("/api", postRoute);
app.use("/api" , AdminRoute);

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(422).send({error:err.message})
});

//listen for requests
app.listen(port, () => {
  console.log("listening for request on port", port);
});
