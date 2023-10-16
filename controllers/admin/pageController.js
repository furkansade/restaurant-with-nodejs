const Category = require("../../models/Category");
const Food = require("../../models/Food");
const Customer = require("../../models/Customer");
const Restaurant = require("../../models/Restaurant")

exports.getAdminHomePage = async (req, res) => {
  const foods = await Food.find();
  const customers = await Customer.find();
  const restaurant = await Restaurant.findOne({
    _id: "652c79e68e27e2de946af38a"
  })

  res.status(200).render("admin/index", {
    pageName: "adminHome",
    foods,
    customers,
    restaurant
  });
};

exports.getAdminFoodsPage = async (req, res) => {
  const categories = await Category.find();
  const foods = await Food.find().populate("category");

  res.status(200).render("admin/foods", {
    pageName: "adminFoods",
    categories,
    foods,
  });
};

exports.getAdminCategoriesPage = async (req, res) => {
  const categories = await Category.find();

  res.status(200).render("admin/categories", {
    pageName: "adminCategories",
    categories,
  });
};

exports.getAdminCustomersPage = async (req, res) => {
  res.status(200).render("admin/customers", {
    pageName: "adminCustomers",
  });
};

exports.getAdminOrdersPage = async (req, res) => {
  res.status(200).render("admin/orders", {
    pageName: "adminOrders",
  });
};

exports.getAdminPaymentMethodsPage = async (req, res) => {
  res.status(200).render("admin/payment-methods", {
    pageName: "adminPaymentMethods",
  });
};
