const express = require("express");
const categoryController = require("../../controllers/admin/categoryController");

const router = express.Router();

router.route("/").post(categoryController.createOneCategory);
router.route("/:id").delete(categoryController.deleteOneCategory);

module.exports = router;
