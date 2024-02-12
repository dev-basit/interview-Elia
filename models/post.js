const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  message: {
    type: String,
    minLength: 1,
    maxLength: 1000,
    required: true,
  },
  like: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
    },
  ],
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
    required: true,
  },
});

const Post = mongoose.model("Post", postSchema);

exports.Post = Post;
