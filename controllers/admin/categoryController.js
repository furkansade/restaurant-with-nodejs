const Category = require("../../models/Category");
const Food = require("../../models/Food");

exports.createOneCategory = async (req, res) => {
  try {
    await Category.create(req.body);

    res.status(201).redirect("/admin/categories");
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};

exports.deleteOneCategory = async (req, res) => {
  try {
    await Category.findByIdAndRemove(req.params.id);

    const food = await Food.findOne({
      category: req.params.id,
    });
    food.category = null;
    food.save();

    res.status(200).redirect("/admin/categories");
  } catch (error) {
    console.log(error);
    res.status(400).redirect("/admin/categories");
  }
};
