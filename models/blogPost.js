const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const BlogPostSchema = new Schema({
  title: {
    type:String,
    required:[true , "Title filed is required"]
  },
  posted:{
    type:Date,
    default:Date.now()
  },
  body:{
    type:String,
    required:[true , "Blog post  text is required"]
  },
  author:{
    type:String,
    default:"Soufiane Boutallaka"
  },
  published:{
    type:Boolean,
    default:false
  },
  image:{
    type:String,
    default:"https://static.pexels.com/photos/132037/pexels-photo-132037.jpeg"
  }
});

const BlogPost = mongoose.model("blogPost", BlogPostSchema);

module.exports = BlogPost;
