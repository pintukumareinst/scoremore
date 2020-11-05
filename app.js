// require("dotenv").config();

require("./models/db");

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const fs = require("file-system");

var passport = require("passport");
var LocalStrategy = require("passport-local");
var passportLocalMongoose = require("passport-local-mongoose");
var User = require("./models/book.model");

const app = express();
const port = 3000;
// const port = process.env.PORT;

var flag = 0;

// const userClass = mongoose.model("user");
var data = require("./models/book.model");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());

app.use(express.static("./public"));

app.engine("html", require("ejs").renderFile);
app.set("views", __dirname);
app.set("view engine", "html");

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);

app.get("/", (req, res) => {
  //console.log(_dirname);
  res.sendFile(__dirname + "/index.html");
});

app.get("/signup", (req, res) => {
  //console.log(_dirname);
  res.render("signup.html", {
    viewTitle: "Inert Employee",
  });
});

app.post("/signup", (req, res) => {
  insertRecord(req, res);
  res.redirect("/courses");
});

function insertRecord(req, res) {
  var user = new data();
  user.name = req.body.name;
  user.username = req.body.username;
  user.phone = req.body.phone;
  user.password = req.body.password;
  user.save((err, doc) => {
    if (!err) {
      console.log("saved");
      flag = 1;
    } else {
      console.log("An error is there in inserting the records" + err);
    }
  });
}

app.get("/aboutus", (req, res) => {
  //console.log(_dirname);
  res.sendFile(__dirname + "/aboutus.html");
});

app.get("/login", (req, res) => {
  //console.log(_dirname);
  res.sendFile(__dirname + "/login.html");
});

//Handling user login
app.post("/login", (req, res) => {
  var username = req.body.username;
  var password = req.body.password;

  data.findOne({ username: username, password: password }, function (
    err,
    user
  ) {
    if (err) {
      console.log(err);
      return res.status(500).send();
    }
    if (!user) {
      return res.status(404).send();
    }
    if (user) {
      console.log("logged in user");
      res.redirect("/courses");
    }

//     return res.status(200).send();
  });
});

app.get("/courses", (req, res) => {
  //console.log(_dirname);
  res.sendFile(__dirname + "/courses.html");
});

app.get("/btech", (req, res) => {
  //console.log(_dirname);
  res.sendFile(__dirname + "/btech.html");
});

app.get("/bca", (req, res) => {
  //console.log(_dirname);
  res.sendFile(__dirname + "/bca.html");
});

app.get("/mtech", (req, res) => {
  //console.log(_dirname);
  res.sendFile(__dirname + "/mtech.html");
});

app.get("/mca", (req, res) => {
  //console.log(_dirname);
  res.sendFile(__dirname + "/mca.html");
});

app.get("/bba", (req, res) => {
  //console.log(_dirname);
  res.sendFile(__dirname + "/bba.html");
});

app.get("/mba", (req, res) => {
  //console.log(_dirname);
  res.sendFile(__dirname + "/mba.html");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
