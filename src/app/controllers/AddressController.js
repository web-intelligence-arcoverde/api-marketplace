exports.create = async (req, res) => {
  const {email, password, role, address} = req.body;

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
    if (req.body.role) {
      Role.find(
        {
          name: {$in: req.body.role},
        },
        (err, role) => {
          if (err) {
            res.status(500).send({message: err});
            return;
          }
          user.role = role.map((role) => role._id);
          user.save(async (err) => {
            if (err) {
              await res.status(500).send({message: err});
              return;
            }
            res.send({message: 'Usuario cadastrado com sucesso!'});
          });
        },
      );
    } else {
      Role.findOne({name: 'user'}, (err, role) => {
        if (err) {
          res.status(500).send({message: err});
          return;
        }
        user.save(async (err) => {
          if (err) {
            await res.status(500).send({message: err});
            return;
          }
          res.send({message: 'Usuario  e Cargo cadastrado com sucesso!'});
        });
      });
    }
  });
  user.save(async (err) => {
    if (err) {
      return;
    }
    if (req.body.role) {
      Role.find(
        {
          name: {$in: req.body.role},
        },
        (err, role) => {
          if (err) {
            res.status(500).send({message: err});
            return;
          }
          user.role = role.map((role) => role._id);
          user.save((err) => {
            if (err) {
              res.status(500).send({message: err});
              return;
            }
          });
        },
      );
    } else {
      Role.findOne({name: 'user'}, (err, role) => {
        if (err) {
          res.status(500).send({message: err});
          return;
        }
        user.role = [role._id];
        user.save((err) => {
          if (err) {
            res.status(500).send({message: err});
            return;
          }
          res.send({message: 'Usuario e Cargo cadastrado com sucesso!'});
        });
      });
    }
  });
};
