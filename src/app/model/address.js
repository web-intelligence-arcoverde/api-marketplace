const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const address = new Schema({
    name: {
        type: String
    },
    number: {
        type: Number
    },
    cep: {
        type: String

    },
    ref: {
        type: String
    },
    district: {
        type: String
    },
});

module.exports = mongoose.model('address', address);
