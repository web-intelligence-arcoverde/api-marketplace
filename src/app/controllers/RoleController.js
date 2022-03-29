const asyncHandler = require('express-async-handler');
const Role = require('../model/role');

exports.createRole = asyncHandler(async (req, res) => {
    try {
        const { name } = req.body;

        if (!name) {
            return res.status(403).send({
                message: 'Alguns atributos do Role não foi passado',
            });
        }

        const role = new Role({
            name,
        });

        const createdRole = await role.save();

        res.status(201).json(createdRole);
    } catch (error) {
        res.json({ error: true, message: 'efoekf' });
    }
});

exports.readRoles = asyncHandler(async (req, res) => {
    try {
        const roles = await Role.find();
        res.status(201).json(roles);
    } catch (error) {
        res.json({ error: true, message: error.message });
    }
});

exports.updateRole = asyncHandler(async (req, res) => {
    try {
        const { name } = req.body;

        const role = await Role.findById(req.params.id);

        if (role) {
            role.name = name;
        }

        const updatedRole = await role.save();

        res.json(updatedRole);
    } catch (error) {
        res.json({ error: true, message: 'efoekf' });
    }
});

exports.deleteRole = asyncHandler(async (req, res) => {
    try {
        const role = await Role.findById(req.params.id);

        await role.delete();

        res.json({ error: false, message: 'deletado' });
    } catch (error) {
        res.json({ error: true, exemple });
    }
});

exports.findRoleById = asyncHandler(async (req, res) => {
    try {
        const role = await Role.findById(req.params.id);
        res.json(role);
    } catch (error) {
        res.json({ error: true, exemple });
    }
});
