const db = require("../model/app");
const ROLES = db.ROLES;
const User = db.user;

checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: `Falhou! este cargo ${req.body.roles[i]} não existe!`,
        });
        return;
      }
    }
  }
  next();
};
const verifySignUp = {
  checkRolesExisted
};
module.exports = verifySignUp;
