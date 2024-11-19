/**
 * Christian Santacruz 
 * 
 * David Inguilan
 * 
 * Cafe Arandia 2.0
 * 
 * Controlador - Recetas
 */
const Recipe = require('../models/Recipe');
const prisma = require('../prismaClient');


let recipes = []; 


exports.createRecipe = async (req, res) => {
    const { titulo, instrucciones, fecha, userId } = req.body;
    try {
        const newRecipe = await prisma.recipe.create({
            data: {
                titulo,
                instrucciones,
                fecha: new Date(fecha),
                user: { connect: { id: userId } }
            }
        });
        res.status(201).json({ message: 'Receta creada con éxito', recipe: newRecipe });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear la receta', details: error.message });
    }
};

exports.getRecipes = async (req, res) => {
    try {
        const recipes = await prisma.recipe.findMany();
        res.status(200).json(recipes);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las recetas', details: error.message });
    }
};

exports.updateRecipe = async (req, res) => {
    const { id } = req.params;
    const { titulo, instrucciones, fecha } = req.body;
    try {
        const updatedRecipe = await prisma.recipe.update({
            where: { id: parseInt(id) },
            data: { titulo, instrucciones, fecha: new Date(fecha) }
        });
        res.status(200).json({ message: `Receta con ID ${id} actualizada`, recipe: updatedRecipe });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar la receta', details: error.message });
    }
};

exports.deleteRecipe = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.recipe.delete({ where: { id: parseInt(id) } });
        res.status(200).json({ message: `Receta con ID ${id} eliminada` });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar la receta', details: error.message });
    }
};