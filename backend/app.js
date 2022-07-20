const express = require("express");
const mongoose = require("mongoose");
const { MONGOURI } = require("./keys");
const port = 4000;
const app = express();

require("./models/users");
require("./models/posts");

app.use(express.json());
app.use(require("./routes/auth"));
app.use(require("./routes/post"));

mongoose.connect(MONGOURI);
mongoose.connection.on("connected", () => {
  console.log("DB connected.");
});
mongoose.connection.on("error", (error) => {
  console.log(error);
});

app.get("/", (req, res) => {
  console.log("The Server was triggered.");
  res.send("The Server was triggered.");
});

app.listen(port, () => {
  console.log("\nListening on port 4000");
});
