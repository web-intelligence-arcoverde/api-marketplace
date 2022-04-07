const config = require('../config/auth.config');
const User = require('../model/user');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
//
exports.authUser = async (req, res) => {
    try {
        const { email, username, password } = req.body;
        const user = await User.find({ email, username });
        if (!user) {
            return res
                .status(404)
                .send({ message: 'Usuario ou email não encontrado' });
        }

        const passwordMatch = bcrypt.compareSync(
            String(password),
            User.password,
        );
        if (!passwordMatch)
            res.status(400).send(
                'login ou senha errada, por-favor verifique e tente novamente.',
            );

        const token = jwt.sign(
            {
                email: user[0].email,
                user: user[0].username,
            },
            config.key,
            {
                expiresIn: 86400, // 24 hours
            },
        );
    } catch (error) {
        console.log(error);
    }
};

//– /api/test/all for public access
//– /api/test/user for loggedin users (any role)
//– /api/test/mod for moderator users
//– /api/test/admin for admin users
