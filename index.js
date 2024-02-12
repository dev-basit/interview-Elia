const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

const posts = require("./routes/post");
const users = require("./routes/user");

app.use("/posts", posts);
app.use("/users", users);

mongoose.connect("mongodb://localhost:27017").then(() => console.log("successfuly connected to db"));

const port = 3003;
app.listen(port, (err, req) => {
  if (err) console.log("err ", err);
});
