const express = require("express");
router = express.Router();
bcrypt = require("bcryptjs");
passport = require("passport");

//USER MODEL
const User = require("../models/User");

//LOGIN HOME
router.get("/loginhome", (req, res) => res.render("loginhome"));

// LOGIN PAGE
router.get("/login", (req, res) => res.render("login"));

// SIGN UP PAGE
router.get("/signup", (req, res) => res.render("signup"));

//SIGN UP HANDLE
router.post("/signup", (req, res) => {
  const { name, email, password } = req.body;
  let errors = [];

  //REQUIRED FIELDS
  if (!name || !email || !password) {
    errors.push({ msg: "Please enter all fields" });
  }

  //CHECK PASSOWRD LENGTH
  if (password.length < 6) {
    errors.push({ msg: "6 character password minimum" });
  }

  if (errors.length > 0) {
    res.render("signup", {
      errors,
      name,
      email,
      password
    });
  } else {
    //VALLIDATION PASSED
    User.findOne({ email: email }).then(user => {
      if (user) {
        errors.push({ msg: "Email is already in use" });
        res.render("signup", {
          errors,
          name,
          email,
          password
        });
      } else {
        const newUser = new User({
          name,
          email,
          password
        });
        //HASH PASSWORD
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => {
                req.flash(
                  "success_msg",
                  "Registration complete, you can log in"
                );
                res.redirect("/user/login");
              })
              .catch(err => console.log(err));
          });
        });
      }
    });
  }
});

//LOGIN HANDLE
router.post("/login", (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "user/login",
    // ADD ERROR MESSAGE
    failureFlash: true
  })(req, res, next);
});

//LOGOUT HANDLE
router.get("/logout", (req, res) => {
  req.logout();
  req.flash("sucess_msg", "You are now logged out");
  res.redirect("user/logout");
});

module.exports = router;
