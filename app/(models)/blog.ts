import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const blogSchema = new Schema({
  title: String,
  description: String,
  category: String,
  content: String,
  author: String,
  ageFlagged: Boolean,
});

const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);

export default Blog;
