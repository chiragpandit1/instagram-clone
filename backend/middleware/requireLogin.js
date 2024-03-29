const { JsonWebTokenError } = require("jsonwebtoken");
const jwt = require("jsonwebtoken");
const mongoose = require('mongoose')
const User = mongoose.model('User')
const { JWT_SECRET } = require("../keys");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res
      .status(401)
      .json({ error: "user not logged in" });
  }
  const token = authorization.replace("Bearer ", "");
  jwt.verify(token, JWT_SECRET, (err, payload) => {
    if (err) {
      return res
        .status(401)
        .json({ error: "incorrect token" });
    }
    const { _id } = payload;
    User.findById(_id).then((userdata) => {
      req.user = userdata;
      next();
    });
  });
};
