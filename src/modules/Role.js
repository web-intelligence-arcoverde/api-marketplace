const mongoose = require("mongoose");
const Role = mongoose.model(
  "User",
  new mongoose.Schema({
    name: {
      type: String,
    },
  })
);
module.exports = Role;
