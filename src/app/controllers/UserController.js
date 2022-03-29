const asyncHandler = require('express-async-handler');
const User = require('../model/user');
const Address = require('../model/address');
const bcrypt = require('bcrypt');

var parse_email = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
var parse_code = /^\d{5}-?\d{3}$/;

exports.createUser = async (req, res) => {
    try {
        const { username, email, phone, password, role_id, address } = req.body;
        if (
            !username ||
            !email ||
            !phone ||
            !password ||
            !role_id ||
            !address
        ) {
            return res.status(403).send({
                message: 'Alguns atributos nao foram passados',
            });
        }

        if (!role_id) {
            return res.status(403).send({
                message: 'Cargo nao existe',
            });
        }

        if (!address) {
            return res.status(403).send({
                message: 'Endereço não inserido, coloque o endereço',
            });
        }

        if (!parse_email.test(email)) {
            return res.status(403).send({
                message: 'email invalido',
            });
        }

        const isExistEmail = await User.findOne({ email });

        if (isExistEmail) {
            return res
                .status(403)
                .send({ message: 'Esse email ja esta sendo usado' });
        }

        if (password.length < 6) {
            return res.status(403).send({
                message: 'Senha muito pequena, tente uma maior',
            });
        }

        if (password.length > 22) {
            return res.status(403).send({
                message: 'Senha muito grande, tente uma menor',
            });
        }

        const user = await User.create({
            username,
            email,
            phone,
            password: bcrypt.genSaltSync(10),
            role_id,
        });
        if (User.create) {
            return res
                .status(200)
                .send({ message: 'Usuario cadastrado com sucesso!' });
        }

        const { postal_code, city, district, street, ref_point, number } =
            address;

        if (!parse_code.test(postal_code)) {
            return res.status(403).send({
                message: 'Cep inválido',
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
        if (Address.create) {
            return res
                .status(200)
                .send({ message: 'Endereço cadastrado com sucesso!' });
        }

        res.json({ user, createAddres });
    } catch (error) {
        res.json({ error: true, message: error.message });
        console.log(error);
        console.log(error.strack);
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
