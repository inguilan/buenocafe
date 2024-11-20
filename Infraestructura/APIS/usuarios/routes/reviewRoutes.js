const express = require('express');
const multer = require('multer');
const { createReview, getReviews } = require('../controllers/reviewController');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/create', upload.single('imagen'), createReview);
router.get('/', getReviews);

module.exports = router;
