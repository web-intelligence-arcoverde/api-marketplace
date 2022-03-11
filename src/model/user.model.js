
const mongoose = require("mongoose");


const Schema = mongoose.Schema;
const User = new Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
  },
  roles: {
    type: Schema.Types.ObjectId,
    ref: "Role",
  },
  password: {
    type: String,
  },
});
module.exports = mongoose.model("User", User);
