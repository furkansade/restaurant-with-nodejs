const express = require("express");
const ejs = require("ejs");

const sitePageRoute = require("./routes/site/pageRoute")

const app = express();

app.use(express.static("public"))

app.set("view engine", "ejs")

//SITE ROUTES
app.use("/", sitePageRoute)

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`listening port: ${PORT}`);
});
