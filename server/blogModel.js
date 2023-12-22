import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    _id: String,
    title: String,
    text: String,
    image: String,
    latest: Boolean,
    date: Date,
    show: Boolean,
  }, { collection: 'blogs' });
  
const Blog = mongoose.model('Blog', blogSchema);
  
export default Blog;