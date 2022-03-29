const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
    name: {
        type: String,
    },

    price: {
        type: Number,
    },

    logo: {
        type: String,
    },

    category_id: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
    },

    market_id: {
        type: Schema.Types.ObjectId,
        ref: 'Market',
    },
});
module.exports = mongoose.model('Product', Product);
