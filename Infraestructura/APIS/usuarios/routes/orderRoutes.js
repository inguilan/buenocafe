/**
 * Christian Santacruz 
 * 
 * David Inguilan
 * 
 * Cafe Arandia 2.0
 * 
 * Rutas Para Ordenes
 */
const express = require('express');
const { createOrder, updateOrder, deleteOrder, getOrders } = require('../controllers/orderController');
const router = express.Router();

router.post('/create', createOrder);
router.put('/:id', updateOrder);      
router.delete('/:id', deleteOrder);   
router.get('/', getOrders);           

module.exports = router;

