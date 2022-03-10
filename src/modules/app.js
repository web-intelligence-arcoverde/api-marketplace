const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.user = require("../controllers/auth.controller");
db.role = require("../controllers/user.controller");
db.ROLES = ["user", "admin", "moderator"];
module.exports = db;