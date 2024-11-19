/**
 * Christian Santacruz 
 * 
 * David Inguilan
 * 
 * Cafe Arandia 2.0
 * 
 * Controlador - Ordenes
 */

const Order = require('../models/Order');
const prisma = require('../prismaClient');

let orders = [];

exports.createOrder = async (req, res) => {
    const { fecha, estado, total, userId, items } = req.body;
    try {
        const newOrder = await prisma.order.create({
            data: {
                fecha: new Date(fecha),
                estado,
                total,
                user: { connect: { id: userId } },
                items: {
                    create: items.map(item => ({
                        quantity: item.quantity,
                        product: { connect: { id: item.productId } }
                    }))
                }
            },
            include: { items: true }
        });
        res.status(201).json({ message: 'Pedido creado con éxito', order: newOrder });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el pedido', details: error.message });
    }
};

exports.getOrders = async (req, res) => {
    try {
        const orders = await prisma.order.findMany({ include: { items: true } });
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los pedidos', details: error.message });
    }
};

exports.updateOrder = async (req, res) => {
    const { id } = req.params;
    const { fecha, estado, total } = req.body;
    try {
        const updatedOrder = await prisma.order.update({
            where: { id: parseInt(id) },
            data: { fecha: new Date(fecha), estado, total }
        });
        res.status(200).json({ message: `Pedido con ID ${id} actualizado`, order: updatedOrder });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el pedido', details: error.message });
    }
};

exports.deleteOrder = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.order.delete({ where: { id: parseInt(id) } });
        res.status(200).json({ message: `Pedido con ID ${id} eliminado` });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el pedido', details: error.message });
    }
};