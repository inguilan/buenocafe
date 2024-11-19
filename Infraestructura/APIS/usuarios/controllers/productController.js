/**
 * Christian Santacruz 
 * 
 * David Inguilan
 * 
 * Cafe Arandia 2.0
 * 
 * Controlador - Productos
 */
const Product = require('../models/Product');
const prisma = require('../prismaClient');

let products = [];


exports.addProduct = async (req, res) => {
    const { nombre, precio, descripcion } = req.body;
    try {
        const newProduct = await prisma.product.create({
            data: { nombre, precio, descripcion }
        });
        res.status(201).json({ message: 'Producto agregado con éxito', product: newProduct });
    } catch (error) {
        res.status(500).json({ error: 'Error al agregar el producto', details: error.message });
    }
};

exports.getProducts = async (req, res) => {
    try {
        const products = await prisma.product.findMany();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los productos', details: error.message });
    }
};

exports.updateProduct = async (req, res) => {
    const { id } = req.params;
    const { nombre, precio, descripcion } = req.body;
    try {
        const updatedProduct = await prisma.product.update({
            where: { id: parseInt(id) },
            data: { nombre, precio, descripcion }
        });
        res.status(200).json({ message: `Producto con ID ${id} actualizado`, product: updatedProduct });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el producto', details: error.message });
    }
};

exports.deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.product.delete({ where: { id: parseInt(id) } });
        res.status(200).json({ message: `Producto con ID ${id} eliminado` });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el producto', details: error.message });
    }
};