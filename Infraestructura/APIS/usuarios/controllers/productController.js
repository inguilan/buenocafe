const prisma = require('../prismaClient');
const path = require('path');

exports.addProduct = async (req, res) => {
  const { nombre, precio, descripcion, userId } = req.body;
  const imagen = req.file ? `/uploads/${req.file.filename}` : null;

  try {
    const newProduct = await prisma.product.create({
      data: { nombre, precio: parseFloat(precio), descripcion, imagen, userId: parseInt(userId) },
    });
    res.status(201).json({ message: 'Producto agregado con éxito', product: newProduct });
  } catch (error) {
    res.status(500).json({ error: 'Error al agregar producto', details: error.message });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany({
      include: { user: true },
    });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener productos', details: error.message });
  }
};
