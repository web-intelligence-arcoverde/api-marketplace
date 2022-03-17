const asyncHandler = require('express-async-handler');
const User = require('../model/user');
const Role = require('../model/role');
const Address = require('../model/address');

/*

email não pode ser igual
validar se é um email mesmo

validar numero 

verificar se o id_role está vindo( só pode cadastrar com ele )


- obrigatorio endereco, role_id


no update só vai atualizar as informações do usuario basicas
{
  "username": "Lucas",
	"email": "lukas.paes@gmail.com",
	"phone": "87999999",
	"role_id": "62310e81ae05b848a1d60e37",
}

- criar outra rota para alterar o password
  
criar uma outra rota para alterar o endereco


*/

exports.createUser = async (req, res) => {
  try {
    const {username, email, phone, password, role_id, address} = req.body;

    const user = await User.create({username, email, phone, password, role_id});

    const {postal_code, city, district, street, ref_point, number} = address;

    const createAddres = await Address.create({
      postal_code,
      city,
      district,
      street,
      ref_point,
      number,
      user_id: user._id,
    });

    res.json({user, createAddres});
  } catch (error) {
    res.json({error: true, message: error.message});
  }
};

exports.readUser = asyncHandler(async (req, res) => {
  try {
    const Users = await User.find();
    res.status(201).json(Users);
  } catch (error) {
    res.json({error: true, message: error.message});
  }
});

exports.updateUser = asyncHandler(async (req, res) => {
  try {
    const {username, email, phone, role_id} = req.body;

    const user = await User.findById(req.params.id);

    if (user) {
      user.username = username;
      user.email = email;
      user.phone = phone;
      user.role_id = role_id;
    }

    const updatedUser = await user.save();

    res.json(updatedUser);
  } catch (error) {
    res.json({error: true, message: error.message});
  }
});

exports.deleteUser = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    await user.delete();

    res.json({error: false, message: 'deletado'});
  } catch (error) {
    res.json({error: true, message: error.message});
  }
});

exports.findUserById = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.json({error: true, message: error.message});
  }
});
