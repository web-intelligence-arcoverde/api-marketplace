
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
const asyncHandler = require('express-async-handler');
const User = require('../model/user');
const Role = require('../model/role');
const Address = require('../model/address');
const { response } = require('express');
const { genSaltSync } = require('bcryptjs');


var parse_email = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
var parse_phone = /^1\d\d(\d\d)?$|^0800 ?\d{3} ?\d{4}$|^(\(0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d\) ?|0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d[ .-]?)?(9|9[ .-])?[2-9]\d{3}[ .-]?\d{4}$/gm
var parse_code = /^\d{5}-?\d{3}$/

exports.createUser = async (req, res) => {
  try {
    
    const { username, email, phone, password, role_id, address } = req.body;
    

    if (!username || !email || !phone || !password || !role_id || !address) {
      return response.status(403).send({
        message: "Alguns atributos nao foram passados",
      });
    }

    if (!parse_email.test(email)) {
      return response.status(403).send({
        message: "email invalido",
      });
    }

    if (!parse_phone.test(phone)) {

      return response.status(403).send({
        message: "telefone invalido"
      });
    }

    if (!role_id) {
      return response.status(403).send({
        message: "Cargo nao existe",
      });
    }

    if (!address) {
      return response.status(403).send({
        message: "Endereço não inserido, coloque o endereço"
      })
    }

    if (password.length < 6) {
      return response.status(403).send({
        message: "Senha muito pequena",
      });
    }

    if (password.length > 22) {
      return response.status(403).send({
        message: "Senha muito grande",
      });
    }
    const isExistEmail = await User.findOne("email", email);

    if (isExistEmail) {
      return response.status(403).send({
        message: "email já existente, coloque outro"
      });
    }

    const user = await User.create({ username, email, phone, password: genSaltSync(10), role_id });
    console.log(user)

    const { postal_code, city, district, street, ref_point, number } = address;

    if (!parse_code.test(phone)) {

      return response.status(403).send({
        message: "CEP INVALIDO"
      });
    }

    const createAddres = await Address.create({
      postal_code,
      city,
      district,
      street,
      ref_point,
      number,
      user_id: user._id,
    });


    res.json({ user, createAddres });
  } catch (error) {
    res.json({ error: true, message: error.message });
  }
};

exports.readUser = asyncHandler(async (req, res) => {
  try {
    const Users = await User.find();
    res.status(201).json(Users);
  } catch (error) {
    res.json({ error: true, message: error.message });
  }
});

exports.updateUser = asyncHandler(async (req, res) => {
  try {
    const { username, email, phone, role_id } = req.body;

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
    res.json({ error: true, message: error.message });
  }
});

exports.deleteUser = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    await user.delete();

    res.json({ error: false, message: 'deletado' });
  } catch (error) {
    res.json({ error: true, message: error.message });
  }
});

exports.findUserById = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.json({ error: true, message: error.message });
  }
});
