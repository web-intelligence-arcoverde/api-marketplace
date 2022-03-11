
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Role = new Schema({
  roles: {
    type: String,
  },
});

module.exports = mongoose.model("Role", Role);
