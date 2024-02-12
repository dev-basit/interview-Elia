const express = require("express");

const { User } = require("../models/user");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    let { name, email, password } = req.body;

    if (!name || !email || !password) return res.status(400).send("Please provide all details.");

    let newUser = new User({ name, email, password });
    await newUser.save();

    return res.json({ id: newUser._id, message: "success" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
