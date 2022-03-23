const db = require('../model/app');
const ROLES = db.ROLES;
const User = db.user;

checkDuplicateUsernameOrEmail = (req, res, next) => {
  // Username
  User.findOne({
    username: req.body.username,
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({message: err});
      return;
    }
    if (user) {
      res.status(400).send({message: 'Falhou! usuario já está em uso!'});
      return;
    }
    // Email
    User.findOne({
      email: req.body.email,
    }).exec((err, user) => {
      if (err) {
        res.status(500).send({message: err});
        return;
      }
      if (user) {
        res.status(400).send({message: 'Falhou! usuario já está em uso!'});
        return;
      }
      next();
    });
  });
};
const verifySignUp = {
  checkDuplicateUsernameOrEmail
};
module.exports = verifySignUp;
