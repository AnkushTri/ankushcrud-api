
const Service = require('../models/service-model');

const serviceData = async (req, res) => {
    try {
        // console.log("hhj")
        let services = await Service.find();
        if (services) {
            return res.status(200).json({ msg: "Service found", services })
        } else {
            return res.status(400).json({ msg: "service not found" })
        }
    } catch (err) {
        console.log("Error in getting data from services", err);
    }
}

module.exports = serviceData;