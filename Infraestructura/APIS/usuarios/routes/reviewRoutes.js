/**
 * Christian Santacruz 
 * 
 * David Inguilan
 * 
 * Cafe Arandia 2.0
 * 
 * Rutas Para Reseñas
 */

const express = require('express');
const { createReview, updateReview, deleteReview, getReviews } = require('../controllers/reviewController');
const router = express.Router();

router.post('/create', createReview);
router.put('/:id', updateReview);      
router.delete('/:id', deleteReview);   
router.get('/', getReviews);         

module.exports = router;
