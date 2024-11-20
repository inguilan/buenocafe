const prisma = require('../prismaClient');

exports.createRecipe = async (req, res) => {
  const { titulo, instrucciones, userId } = req.body;
  const imagen = req.file ? `/uploads/${req.file.filename}` : null;

  try {
    const newRecipe = await prisma.recipe.create({
      data: { titulo, instrucciones, imagen, userId: parseInt(userId) },
    });
    res.status(201).json({ message: 'Receta creada con éxito', recipe: newRecipe });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear receta', details: error.message });
  }
};

exports.getRecipes = async (req, res) => {
  try {
    const recipes = await prisma.recipe.findMany({
      include: { user: true },
    });
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener recetas', details: error.message });
  }
};
