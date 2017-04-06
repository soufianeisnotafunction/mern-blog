const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
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
    required:[true, "Username is required"]
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

const Admin = mongoose.model('admin', AdminSchema);

module.exports = Admin;
