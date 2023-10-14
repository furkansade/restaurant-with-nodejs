const restaurantController = require("../../controllers/admin/restaurantController")
const express = require("express");
const { route } = require("./pageRoute");

const router = express.Router()

router.route("/").post(restaurantController.createRestaurant)
router.route("/:id").put(restaurantController.updateRestaurant)

module.exports = router;

