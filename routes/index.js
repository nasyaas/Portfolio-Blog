const express = require("express");
const router = express.Router();

//HOMEPAGE
router.get("/", (req, res) => res.render("homepage"));

//BLOG FULL PAGES

router.get("/cameltrench", (req, res) => res.render("cameltrench"));


module.exports = router;
