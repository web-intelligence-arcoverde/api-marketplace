const config = require("../config/auth.config");
const db = require("../model/app");
const User = db.user;
const Role = db.role;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
//
exports.signup = (req, res) => {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
  });
  console.log(user)
  user.save(async (err, result) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (req.body.role) {
      Role.find(
        {
          name: { $in: req.body.role },
        },
        (err, role) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }
          user.role = role.map((role) => role._id);
          user.save(async (err) => {
            if (err) {
              await res.status(500).send({ message: err });
              return;
            }
            res.send({ message: "Usuario cadastrado com sucesso!" });
          });
        }
      );
    } else {
      Role.findOne({ name: "user" }, (err, role) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
        user.save(async (err) => {
          if (err) {
            await res.status(500).send({ message: err });
            return;
          }
          res.send({ message: "Usuario  e Cargo cadastrado com sucesso!" });
        });
      });
    }
  })
  user.save(async (err) => {
    if (err) {
      return;
    }
    if (req.body.role) {
      Role.find(
        {
          name: { $in: req.body.role },
        },
        (err, role) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }
          user.role = role.map((role) => role._id);
          user.save((err) => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }
          });
        }
      );
    } else {
      Role.findOne({ name: "user" }, (err, role) => {
        if (err) {
          res.status(500).send({ message: err });
          return
        }
        user.role = [role._id];
        user.save((err) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }
          res.send({ message: "Usuario e Cargo cadastrado com sucesso!" });
        });
      });
    }
  });
};
exports.signin = (req, res) => {
  User.findOne({
    username: req.body.username,
  })
    .populate("role", "-__")
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      if (!user) {
        return res.status(404).send({ message: "Usuario não encontrado" });
      }
      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Senha invalida!",
        });
      }
      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400, // 24 hours
      });
      var authorities = [];
      for (let i = 0; i < user.role.length; i++) {
        authorities.push("ROLE_" + user.role[i].name.toUpperCase());
      }
      res.status(200).send({
        id: user._id,
        username: user.username,
        email: user.email,
        role: authorities,
        accessToken: token,
      });
    });
};

//– /api/test/all for public access
//– /api/test/user for loggedin users (any role)
//– /api/test/mod for moderator users
//– /api/test/admin for admin users

