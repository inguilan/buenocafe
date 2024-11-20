const prisma = require('../prismaClient');

exports.createReview = async (req, res) => {
  const { productId, calificacion, comentario, userId } = req.body;
  const imagen = req.file ? `/uploads/${req.file.filename}` : null;

  try {
    const newReview = await prisma.review.create({
      data: {
        calificacion: parseInt(calificacion),
        comentario,
        imagen,
        userId: parseInt(userId),
        productId: parseInt(productId),
      },
    });
    res.status(201).json({ message: 'Reseña creada con éxito', review: newReview });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear reseña', details: error.message });
  }
};

exports.getReviews = async (req, res) => {
  try {
    const reviews = await prisma.review.findMany({
      include: { product: true, user: true },
    });
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener reseñas', details: error.message });
  }
};
