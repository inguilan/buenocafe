/**
 * Christian Santacruz 
 * 
 * David Inguilan
 * 
 * Cafe Arandia 2.0
 * 
 * Controlador - Reseñas
 */

const Review = require('../models/Review');
const prisma = require('../prismaClient');


let reviews = [];


exports.createReview = async (req, res) => {
    const { calificacion, comentario, fecha, userId } = req.body;
    try {
        const newReview = await prisma.review.create({
            data: {
                calificacion,
                comentario,
                fecha: new Date(fecha),
                user: { connect: { id: userId } }
            }
        });
        res.status(201).json({ message: 'Reseña creada con éxito', review: newReview });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear la reseña', details: error.message });
    }
};

exports.getReviews = async (req, res) => {
    try {
        const reviews = await prisma.review.findMany();
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las reseñas', details: error.message });
    }
};

exports.updateReview = async (req, res) => {
    const { id } = req.params;
    const { calificacion, comentario, fecha } = req.body;
    try {
        const updatedReview = await prisma.review.update({
            where: { id: parseInt(id) },
            data: { calificacion, comentario, fecha: new Date(fecha) }
        });
        res.status(200).json({ message: `Reseña con ID ${id} actualizada`, review: updatedReview });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar la reseña', details: error.message });
    }
};

exports.deleteReview = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.review.delete({ where: { id: parseInt(id) } });
        res.status(200).json({ message: `Reseña con ID ${id} eliminada` });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar la reseña', details: error.message });
    }
};