const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../keys");
const requirelogin = require("../middleware/requireLogin");

router.post("/signup", (req, res) => {
  const { name, email, password } = req.body;
  if (!email || !name || !password) {
    return res
      .status(422)
      .json({ error: "insufficient data, please add all the feilds." });
  }
  User.findOne({ email: email })
    .then((savedUser) => {
      if (savedUser) {
        return res
          .status(422)
          .json({ error: "user already exists with same email." });
      }
      bcrypt.hash(password, 12).then((hashedpassword) => {
        const user = new User({
          email,
          username: name,
          password: hashedpassword,
        });

        user
          .save()
          .then((user) => {
            res.json({ message: "saved successfully" });
          })
          .catch((err) => {
            console.log(err);
          });
      });
    })

    .catch((err) => {
      console.log(err);
    });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).json("The credentials do not match.");
  }
  User.findOne({ email: email }).then((savedUser) => {
    if (!savedUser) {
      return res.status(422).json("The user does not exist.");
    }
    bcrypt
      .compare(password, savedUser.password)
      .then((domatch) => {
        if (domatch) {
          const token = jwt.sign({ _id: savedUser._id }, JWT_SECRET);
          res.json({ message: "Signed in successfully", token });
        } else {
          return res
            .status(422)
            .json({ message: "Invalid password for the email" });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

module.exports = router;
