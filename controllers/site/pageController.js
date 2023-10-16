const Category = require("../../models/Category");
const Food = require("../../models/Food");  

exports.getHomePage = async (req, res) => {
  const foods = await Food.find()

  res.status(200).render("site/index", {
    pageName: "home",
    foods,
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

exports.getRegisterPage = async (req, res) => {
  res.status(200).render("site/register", {
    pageName: "register"
  })
}
