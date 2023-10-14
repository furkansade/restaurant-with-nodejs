const express = require("express");

const pageController = require("../../controllers/site/pageController");

const router = express.Router();

router.route("/").get(pageController.getHomePage);
router.route("/about").get(pageController.getAboutPage);
router.route("/menu").get(pageController.getMenuPage)
router.route("/register").get(pageController.getRegisterPage)

module.exports = router;
