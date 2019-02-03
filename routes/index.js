const express = require("express");
router = express.Router();
const { ensureAuthenticated } = require("../config/auth");

//HOMEPAGE
router.get("/", (req, res) => res.render("homepage"));

// DASHBOARD
//with Mongo create a profile page???? with form
router.get("/dashboard", ensureAuthenticated, (req, res) =>
  res.render("dashboard", {
    user: req.user
  })
);

//BLOG FULL PAGES
router.get("/cameltrench", (req, res) => res.render("cameltrench"));

router.get("/pinktulleskirt", (req, res) => res.render("pinktulleskirt"));

router.get("/whatsinmybag", (req, res) => res.render("whatsinmybag"));

module.exports = router;
