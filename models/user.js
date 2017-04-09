const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;



const UserSchema = new Schema({
  firstName:{
    type:String,
    default:'Soufiane'
  },
  lastName:{
    type:String,
    default:'Boutallaka'
  },
  email:{
    type:String,
    required:[true, "Username is required"],
    unique:true
  },
  password:{
    type:String,
    required:[true, "Password is required"]
  },
  avatar:{
    type:String,
    default:'https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png'
  }
});

//authenticate input against db
// UserSchema.statics.authenticate = function(email, password, callback) {
//   User.findOne({ email: email }).exec(function(error, user) {
//     if (error) {
//       return callback(error);
//     } else if (!user) {
//       const err = new Error("User not found.");
//       return callback(err);
//     }
//     bcrypt.compare(password, user.password, function(error, result) {
//       if (result === true) {
//         return callback(null, user);
//       } else {
//         return callback();
//       }
//     });
//   });
// };


//hash password before savinf to db
UserSchema.pre('save', function(next) {
var user = this;
bcrypt.hash(user.password, 10 ,  function(err,hash){
  if (err) {
    return next(err)
  }
  user.password = hash;
  next();
  })
});


const User = mongoose.model('user', UserSchema);

module.exports = User;
