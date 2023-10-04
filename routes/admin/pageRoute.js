const express = require("express");
const pageController = require("../../controllers/admin/pageController");

const router = express.Router();

router.route("/").get(pageController.getAdminHomePage);
router.route("/foods").get(pageController.getAdminFoodsPage)
router.route("/categories").get(pageController.getAdminCategoriesPage)
router.route("/customers").get(pageController.getAdminCustomersPage)
router.route("/orders").get(pageController.getAdminOrdersPage)
router.route("/payment-methods").get(pageController.getAdminPaymentMethodsPage)

module.exports = router;
