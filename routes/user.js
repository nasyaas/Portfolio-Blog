const express = require("express");
const router = express.Router();

//LOGIN HOME
router.get('/loginhome', (req, res) => res.render('loginhome'));

// Login Page
router.get('/login', (req, res) => res.render('login'));

// Register Page
router.get('/signup', (req, res) => res.render('signup'));


module.exports = router;
