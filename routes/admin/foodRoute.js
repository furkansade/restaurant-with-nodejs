const express = require("express");
const foodController = require("../../controllers/admin/foodController");

const router = express.Router();

router.route("/").post(foodController.createOneFood);
router.route("/:id").delete(foodController.deleteOneFood);

module.exports = router;
