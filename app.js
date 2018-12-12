var express = require("express"),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  app = express();

mongoose.connect(
  "mongodb://localhost/portfolio_blog",
  { useNewUrlParser: true }
);

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(process.env.PORT, process.env.IP, function() {
  console.log("Server is running...");
});
