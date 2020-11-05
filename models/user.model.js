const mongoose = require("mongoose");

var student = new mongoose.Schema({
  name: { type: String },
  username: { type: String },
  phone: { type: String },
  password: { type: String },
});
mongoose.model("user", student);
