const config = require('../config/auth.config');
const db = require('../model/app');
const User = db.user;
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
///
exports.signup = (req, res) => {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
  });
  console.log(user);
  user.save(async (err, result) => {
    if (err) {
      res.status(500).send({message: err});
      return;
    }
//
exports.signin = (req, res) => {
  User.findOne({
    username: req.body.username,
  }).exec((err, user) => {
      if (err) {
        res.status(500).send({message: err});
        return;
      }
      if (!user) {
        return res.status(404).send({message: 'Usuario não encontrado'});
      }
      const passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password,
      );
      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: 'Senha invalida!',
        });
      }
      var token = jwt.sign({id: user.id}, config.secret, {
        expiresIn: 86400, // 24 hours
      });
      //– /api/test/all for public access
    //– /api/test/user for loggedin users (any role)
  //– /api/test/mod for moderator users
//– /api/test/admin for admin users.
