const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Market = new Schema({
    market_name: {
        type: String,
    },
    logo: {
        type: String,
    },
    location: {
        type: Object,
    },

    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
});

module.exports = mongoose.model('Market', Market);
