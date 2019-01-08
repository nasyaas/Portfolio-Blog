const express = require("express");
bodyParser = require("body-parser");
app = express();


app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/public", express.static("public"));

//ROUTES

app.use("/", require("./routes/index.js"));
app.use("/users", require("./routes/user.js"));
app.use("/cameltrench", require("./routes/index.js"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));

// var bodyParser = require("body-parser"),
//   mongoose = require("mongoose");
// (express = require("express")), (app = express());

// mongoose.connect("mongodb://localhost/portfolio-blog");
// app.set("view engine", "ejs");
// app.use(express.static("public"));
// app.use(bodyParser.urlencoded({ extended: true }));

// app.listen(process.emitWarning.prototype, process.env.IP, function() {
//   console.log("Server is running...");
// });
