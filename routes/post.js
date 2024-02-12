const express = require("express");

const { Post } = require("../models/post");
const { User } = require("../models/user");
const router = express.Router();

router.get("/message", async (req, res) => {
  try {
    let posts = await Post.find();
    return res.send(posts);
  } catch (error) {
    console.log(error);
  }
});

router.get("/message/:id", async (req, res) => {
  try {
    let post = await Post.find({ _id: req.params.id });
    return res.send(post);
  } catch (error) {
    console.log(error);
  }
});

router.post("/message", async (req, res) => {
  try {
    let { userId, message } = req.body;

    if (!message || !userId) return res.status(400).send("Please provide message");

    let newPost = new Post({ userId: userId, message: message, likes: [] });
    await newPost.save();

    return res.json({ id: newPost._id, message: "success" });
  } catch (error) {
    console.log(error);
  }
});

router.put("/message/like", async (req, res) => {
  try {
    let { userId, postId } = req.body;

    if (!userId || !postId) return res.status(400).send("Please provide all details.");

    const user = await User.find({ _id: userId });
    if (!user) return res.status(404).send("User not found");

    const post = await Post.find({ _id: postId });
    if (!post) return res.status(404).send("Post not found");

    // if (post.like.includes(userId)) return res.status(400).send("Already liked");

    post.like.push(userId);
    await post.save();

    return res.json(post);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
