const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: String,
    phone: String,
    // Other restaurant-specific fields
});

module.exports = mongoose.model('Restaurant', restaurantSchema);
