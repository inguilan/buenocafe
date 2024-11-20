const express = require('express');
const multer = require('multer');
const { createRecipe, getRecipes } = require('../controllers/recipeController');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/create', upload.single('imagen'), createRecipe);
router.get('/', getRecipes);

module.exports = router;
