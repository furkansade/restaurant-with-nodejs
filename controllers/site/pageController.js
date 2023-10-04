exports.getHomePage = async (req, res) => {
  res.status(200).render("site/index");
};

exports.getAboutPage = async (req, res) => {
  res.status(200).render("site/about");
};
