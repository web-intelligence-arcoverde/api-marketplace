const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const User = new Schema({
    username: {
        type: String,
    },
    email: {
        type: String,
    },

    phone: {
        type: String,
    },

    password: {
        type: String,
    },
    role_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role',
    },
});
module.exports = mongoose.model('User', User);
