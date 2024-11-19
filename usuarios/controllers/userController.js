/**
 * Christian Santacruz 
 * 
 * David Inguilan
 * 
 * Cafe Arandia 2.0
 * 
 * Controlador - Usuarios
 */

const User = require('../models/User');
const prisma = require('../prismaClient');


exports.registerUser = async (req, res) => {
    const { nombre, email, contraseña } = req.body;
    try {
        const newUser = await prisma.user.create({
            data: { nombre, email, contraseña }
        });
        res.status(201).json({ message: 'Usuario registrado con éxito', user: newUser });
    } catch (error) {
        res.status(500).json({ error: 'Error al registrar el usuario', details: error.message });
    }
};

exports.loginUser = async (req, res) => {
    const { email, contraseña } = req.body;
    try {
        const user = await prisma.user.findUnique({ where: { email } });
        if (user && user.contraseña === contraseña) {
            res.status(200).json({ message: 'Sesión iniciada', user });
        } else {
            res.status(401).json({ message: 'Credenciales incorrectas' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al iniciar sesión', details: error.message });
    }
};

exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const { nombre, email, contraseña } = req.body;
    try {
        const updatedUser = await prisma.user.update({
            where: { id: parseInt(id) },
            data: { nombre, email, contraseña }
        });
        res.status(200).json({ message: `Usuario con ID ${id} actualizado`, user: updatedUser });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el usuario', details: error.message });
    }
};

exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.user.delete({ where: { id: parseInt(id) } });
        res.status(200).json({ message: `Usuario con ID ${id} eliminado` });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el usuario', details: error.message });
    }
};