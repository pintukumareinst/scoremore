const mongoose = require("mongoose");

const url = "mongodb://127.0.0.1:27017/book";

mongoose.connect(url, { useNewUrlParser: true }, (err) => {
  if (!err) {
    console.log("MongoDB Connection is successful");
  } else {
    console.log("An error occured in connecting mongodb" + err);
  }
});

require("./book.model");
