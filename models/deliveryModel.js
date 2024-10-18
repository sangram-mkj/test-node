const mongoose = require('mongoose');

const deliverySchema = new mongoose.Schema({
    deliveryPersonName: {
        type: String,
        required: true
    },
    phone: String,
    // Other delivery-specific fields
});

module.exports = mongoose.model('Delivery', deliverySchema);
