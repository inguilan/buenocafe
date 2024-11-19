/**
 * Christian Santacruz 
 * 
 * David Inguilan
 * 
 * Cafe Arandia 2.0
 * 
 * Rutas Para Productos
 */

const express = require('express');
const { addProduct, updateProduct, deleteProduct, getProducts } = require('../controllers/productController');
const router = express.Router();

router.post('/add', addProduct);
router.put('/:id', updateProduct);    
router.delete('/:id', deleteProduct);  
router.get('/', getProducts);          

module.exports = router;

