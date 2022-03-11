const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.user = require("../model/role.model");
db.role = require("../model/user.model");
db.ROLES = ["user", "admin", "moderator"];
module.exports = db;