const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const Schema = mongoose.Schema

const RestaurantSchema = new Schema({
    name:String,
    logoImage:String,
    about: String,
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
    type: String,
    required: true,
    },
    phone: String,
    address: String,
    instagram: String,
    youtube: String,
    twitter: String,
})

RestaurantSchema.pre("save", function (next) {
    const user = this;
    if (!user.isModified("password")) return next();
  
    bcrypt.genSalt(10, function (err, salt) {
      if (err) return next(err);
      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  });
  
  const Restaurant = mongoose.model("Restaurant", RestaurantSchema);
  
  module.exports = Restaurant;