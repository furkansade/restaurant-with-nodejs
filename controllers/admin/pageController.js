exports.getAdminHomePage = async (req, res) => {
    res.status(200).render("admin/index", {
        pageName: "adminHome"
    })
}

exports.getAdminFoodsPage = async (req, res) => {
    res.status(200).render("admin/foods", {
        pageName: "adminFoods"
    })
}

exports.getAdminCategoriesPage = async (req, res) => {
    res.status(200).render("admin/categories", {
        pageName: "adminCategories"
    })
}

exports.getAdminCustomersPage = async (req, res) => {
    res.status(200).render("admin/customers", {
        pageName: "adminCustomers"
    })
}

exports.getAdminOrdersPage = async (req, res) => {
    res.status(200).render("admin/orders", {
        pageName: "adminOrders"
    })
}

exports.getAdminPaymentMethodsPage = async (req, res) => {
    res.status(200).render("admin/payment-methods", {
        pageName: "adminPaymentMethods"
    })
}
