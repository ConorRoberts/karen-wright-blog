import mongoose, { Schema } from "mongoose";

const postSchema = new Schema({
  title: String,
  author: String,
  text: String,
  category: String,
  date: Date,
  imageURL: String,
});

export default mongoose.models.posts || mongoose.model("posts",postSchema);
