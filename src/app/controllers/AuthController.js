const config = require('../config/auth.config');
const db = require('../model/app');
const User = db.user;
const secret = require('../secrect.json')
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
//
exports.authUser = async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const user = await User.find({ email, username });
    if (!user) {
      return res.status(404).send({message: 'Usuario ou email não encontrado'});
    }
    
    const passwordMatch = bcrypt.compareSync(String(password), User.password);
    if (!passwordMatch)
      res
        .status(400)
        .send(
          "login ou senha errada, por-favor verifique e tente novamente."
        );

    const token = jwt.sign({
       
      email: user[0].email,
      user: user[0].username,
    
      },
      config.key,
      {
        expiresIn: 86400, // 24 hours
      }
      );
  } catch (error) {
    console.log(error)
  }
  }
/*
      var authorities = [];
      for (let i = 0; i < user.role.length; i++) {
        authorities.push('ROLE_' + user.role[i].name.toUpperCase());
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
*/

//– /api/test/all for public access
//– /api/test/user for loggedin users (any role)
//– /api/test/mod for moderator users
//– /api/test/admin for admin users
