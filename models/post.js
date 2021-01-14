const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  event: { type: String, required: true },
  organizer: { type: String, required: true },
  description: String,
  date: { type: Date, default: Date.now },
  startTime: {type: String, required: true},
  startTime: {type: String, required: true},
  endTime: {type: String, required: true}
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
