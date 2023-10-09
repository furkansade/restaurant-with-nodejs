const Food = require("../../models/Food");
const Category = require("../../models/Category");
const fs = require("fs");

exports.createOneFood = async (req, res) => {
  try {
    let uploadImage = req.files.image;
    let uploadPath =
      __dirname + "/../../public/foodsUploads/" + uploadImage.name;

    uploadImage.mv(uploadPath, async () => {
      await Food.create({
        ...req.body,
        image: "/foodsUploads/" + uploadImage.name,
      });
    });
    res.status(201).redirect("/admin/foods");
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "error",
      error,
    });
  }
};

exports.deleteOneFood = async (req, res) => {
  try {
    const food = await Food.findOne({ _id: req.params.id });

    let uploadImage = food.image;
    let uploadPath = __dirname + "/../../public/" + uploadImage;

    fs.unlink(uploadPath, (err) => {
      if (err) throw err;
    });

    await Food.findByIdAndRemove(req.params.id);

    res.status(200).redirect("/admin/foods");
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "error",
      error,
    });
  }
};
