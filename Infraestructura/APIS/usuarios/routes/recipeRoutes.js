/**
 * Christian Santacruz 
 * 
 * David Inguilan
 * 
 * Cafe Arandia 2.0
 * 
 * Rutas Para Recetas
 */
const express = require('express');
const { createRecipe, updateRecipe, deleteRecipe, getRecipes } = require('../controllers/recipeController');
const router = express.Router();

router.post('/create', createRecipe);
router.put('/:id', updateRecipe);      
router.delete('/:id', deleteRecipe);   
router.get('/', getRecipes);          

module.exports = router;

