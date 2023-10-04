const mongoose = require("mongoose")
const slugify = require("slugify")

const Schema = mongoose.Schema;

const FoodSchema = new Schema({
    title: String,
    slug: String,
    description: {
        type: String,
        maxLength: 150
    },
    photo: String,
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        default: 'Pizza'
    },
    price: Number,

})

const Food = mongoose.model("Food", FoodSchema)

module.exports = Food;