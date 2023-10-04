exports.getHomePage = async (req, res) => {
  res.status(200).render("site/index", {
    pageName: "home",
  });
};

exports.getAboutPage = async (req, res) => {
  res.status(200).render("site/about", {
    pageName: "about",
  });
};

exports.getMenuPage = async (req, res) => {
  res.status(200).render("site/menu", {
    pageName: "menu",
  });
};
