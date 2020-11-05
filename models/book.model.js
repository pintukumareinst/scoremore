const mongoose = require("mongoose");

var student = new mongoose.Schema({
  name: { type: String },
  username: { type: String },
  phone: { type: String },
  password: { type: String },
});
var data=mongoose.model("user", student);
module.exports = data;
