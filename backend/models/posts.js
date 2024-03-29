const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  photo: {
    type: String,
    required: true,
    default: "no picture"
  },
  postedby: {
    type: ObjectId,
    ref: "User",
    required: true
  },
});

mongoose.model("Post", postSchema);
