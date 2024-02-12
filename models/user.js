const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 1,
    maxLength: 1000,
    required: true,
  },
  email: {
    type: String,
    minLength: 1,
    maxLength: 1000,
    required: true,
  },
  password: {
    type: String,
    min: 4,
    max: 1000,
  },
});

const User = mongoose.model("User", userSchema);

exports.User = User;
