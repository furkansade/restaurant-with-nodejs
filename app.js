const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const fileUpload = require("express-fileupload");
const MongoStore = require("connect-mongo");

const sitePageRoute = require("./routes/site/pageRoute");
const adminPageRoute = require("./routes/admin/pageRoute");
const adminFoodRoute = require("./routes/admin/foodRoute");
const adminCategoryRoute = require("./routes/admin/categoryRoute");

mongoose.set("strictQuery", false);

const app = express();

app.use(express.static("public"));

mongoose.connect("mongodb://127.0.0.1:27017/restaurantDB").then(() => {
  console.log("restaurantDB connected successfully");
});

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use(fileUpload());
app.use(
  methodOverride("_method", {
    methods: ["POST", "GET"],
  })
);

//SITE ROUTES
app.use("/", sitePageRoute);

//ADMIN ROUTES
app.use("/admin", adminPageRoute);
app.use("/foods", adminFoodRoute);
app.use("/categories", adminCategoryRoute);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`listening port: ${PORT}`);
});
