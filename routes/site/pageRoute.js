const express = require("express");

const pageController = require("../../controllers/site/pageController");

const router = express.Router();

router.route("/").get(pageController.getHomePage);
router.route("/about").get(pageController.getAboutPage);

module.exports = router;
