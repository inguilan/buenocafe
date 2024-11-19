const prisma = require('../prismaClient');

exports.addProduct = async (req, res) => {
    const { nombre, precio, descripcion } = req.body;
    try {
        const newProduct = await prisma.product.create({
            data: { nombre, precio, descripcion },
        });
        res.status(201).json({ message: 'Producto agregado con éxito', product: newProduct });
    } catch (error) {
        console.error('Error al agregar producto:', error.message);
        res.status(500).json({ error: 'Error al agregar producto', details: error.message });
    }
};

exports.getProducts = async (req, res) => {
    try {
        const products = await prisma.product.findMany();
        res.status(200).json(products);
    } catch (error) {
        console.error('Error al obtener productos:', error.message);
        res.status(500).json({ error: 'Error al obtener productos', details: error.message });
    }
};

exports.updateProduct = async (req, res) => {
    const { id } = req.params;
    const { nombre, precio, descripcion } = req.body;
    try {
        const updatedProduct = await prisma.product.update({
            where: { id: parseInt(id) },
            data: { nombre, precio, descripcion },
        });
        res.status(200).json({ message: `Producto con ID ${id} actualizado`, product: updatedProduct });
    } catch (error) {
        console.error('Error al actualizar producto:', error.message);
        res.status(500).json({ error: 'Error al actualizar producto', details: error.message });
    }
};

exports.deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.product.delete({
            where: { id: parseInt(id) },
        });
        res.status(200).json({ message: `Producto con ID ${id} eliminado` });
    } catch (error) {
        console.error('Error al eliminar producto:', error.message);
        res.status(500).json({ error: 'Error al eliminar producto', details: error.message });
    }
};
