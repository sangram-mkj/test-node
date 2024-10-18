const Delivery = require('../models/deliveryModel');

exports.getAllDeliveries = async (req, res) => {
    try {
        const deliveries = await Delivery.find();
        res.json(deliveries);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createDelivery = async (req, res) => {
    const delivery = new Delivery(req.body);
    try {
        const newDelivery = await delivery.save();
        res.status(201).json(newDelivery);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
