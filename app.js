const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo");

const sitePageRoute = require("./routes/site/pageRoute");
const adminPageRoute = require("./routes/admin/pageRoute");

const FoodDB = require("./models/Food");

mongoose.set("strictQuery", false);

const app = express();

app.use(express.static("public"));

mongoose.connect("mongodb://127.0.0.1:27017/restaurantDB").then(() => {
  console.log("restaurantDB connected successfully");
});

app.set("view engine", "ejs");

FoodDB.find();

//SITE ROUTES
app.use("/", sitePageRoute);

//ADMIN ROUTES
app.use("/admin", adminPageRoute);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`listening port: ${PORT}`);
});
