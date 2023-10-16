const mongoose = require("mongoose");
const slugify = require("slugify");

const Schema = mongoose.Schema;

const FoodSchema = new Schema({
  title: {
    type: String,
    unique: true,
  },
  slug: String,
  description: {
    type: String,
    maxLength: 150,
  },
  image: String,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  price: Number,
});

FoodSchema.pre("validate", function (next) {
  this.slug = slugify(this.title, {
    lower: true,
    strict: true,
  });
  next();
});

const Food = mongoose.model("Food", FoodSchema);

module.exports = Food;
