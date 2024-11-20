const prisma = require('../prismaClient');

exports.createOrder = async (req, res) => {
  const { userId, items } = req.body;
  try {
    const newOrder = await prisma.order.create({
      data: {
        userId,
        items: {
          create: items.map((item) => ({
            productId: item.productId,
            quantity: item.quantity,
          })),
        },
      },
      include: { items: true },
    });
    res.status(201).json({ message: 'Orden creada con éxito', order: newOrder });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear orden', details: error.message });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await prisma.order.findMany({
      include: { items: { include: { product: true } } },
    });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener órdenes', details: error.message });
  }
};
