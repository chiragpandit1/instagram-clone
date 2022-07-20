const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const requirelogin = require("../middleware/requireLogin");
const Post = mongoose.model("Post");

router.get("/allPosts", (req, res) => {
  Post.find()
    .populate("postedby", "_id username")
    .then((posts) => {
      res.json({ posts });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/createpost", requirelogin, (req, res) => {
  const { title, body, photo } = req.body;
  if (!title || !body || !photo) {
    return res.status(422).json({ error: "field not found" });
  }

  req.user.password = undefined;

  const post = new Post({
    title,
    body,
    postedby: req.user,
    photo,
  });
  post
    .save()
    .then((result) => {
      res.json({ post: result });
    })
    .catch((error) => console.log(error));
});

router.get("/myposts", requirelogin, (req, res) => {
  Post.find({ postedby: req.user._id })
    .populate("postedby", "_id username")
    .then((myposts) => {
      res.json({ myposts });
    });
});

module.exports = router;
