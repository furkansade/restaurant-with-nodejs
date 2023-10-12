const Category = require("../../models/Category");
const Food = require("../../models/Food");  

exports.getHomePage = async (req, res) => {
  const category = await Category.find();

  res.status(200).render("site/index", {
    pageName: "home",
    category,
  });
};

exports.getAboutPage = async (req, res) => {
  res.status(200).render("site/about", {
    pageName: "about",
  });
};

exports.getMenuPage = async (req, res) => {

  const foods = await Food.find().populate("category")
  const categories = await Category.find()

  res.status(200).render("site/menu", {
    pageName: "menu",
    foods,
    categories
  });
};
