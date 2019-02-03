const express = require("express");
mongoose = require("mongoose");
app = express();
passport = require("passport");
flash = require("connect-flash");
session = require("express-session");

//PASSPORT CONFIG
require("./config/passport")(passport);

//DB CONFIG
const db = require("./config/keys").mongoURI;

//CONNECT TO MONGO
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("mongoDB Connected..."))
  .catch(err => console.log(err));

//EJS
app.set("view engine", "ejs");

//BODY PARSER
app.use(express.urlencoded({ extended: true }));

app.use("/public", express.static("public"));

//EXPRESS-SESSION MIDDLEWARE
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
  })
);

//PASSPORT MIDDLEWARE
app.use(passport.initialize());
app.use(passport.session());

//FLASH MIDDLEWARE
app.use(flash());

//GLOBAL VARIABLES
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  next();
});

//ROUTES

app.use("/", require("./routes/index.js"));
app.use("/user", require("./routes/user"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));

// var bodyParser = require('body-parser"),
//   mongoose = require("mongoose");
// (express = require("express")), (app = express());

// mongoose.connect("mongodb://localhost/portfolio-blog");
// app.set("view engine", "ejs");
// app.use(express.static("public"));
// app.use(bodyParser.urlencoded({ extended: true }));

// app.listen(process.emitWarning.prototype, process.env.IP, function() {
//   console.log("Server is running...");
// });
