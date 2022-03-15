const db = require('../model/app');
const User = db.user;
const Role = db.role;
const Address = db.address;

exports.create = async (req, res) => {
  try {
    const {email, password, id_role, address} = req.body;

    const {name, number, cep, ref, district} = address;

    res.json({error: false, user});
  } catch (error) {
    res.json({error: true, message: error.message});
  }
};
