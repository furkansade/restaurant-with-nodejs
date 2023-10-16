const Restaurant = require("../../models/Restaurant")

exports.createRestaurant = async (req, res) => {
    try {
        await Restaurant.create(req.body)
        res.status(201).redirect("/admin")
    } catch (error) {
        console.log(error)
        res.status(400).redirect("/admin/foods")
    }
}

exports.updateRestaurant = async (req, res) => {
    try {
        await Restaurant.findOneAndUpdate({_id: "652c79e68e27e2de946af38a"}, req.body)
        
        res.status(200).redirect("/admin")
    } catch (error) {
        console.log(error)
        res.status(400).redirect("/admin/foods")
    }
}