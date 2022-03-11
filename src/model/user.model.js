
const mongoose = require("mongoose");
const { user } = require("./app");


const Schema = mongoose.Schema;
const User = new Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
  },
  
  password: {
    type: String,
  },
  roles: {
    type: Schema.Types.ObjectId,
    ref: "Role",
  },
});
module.exports = mongoose.model("User", User);
