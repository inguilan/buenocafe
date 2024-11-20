const express = require('express');
const multer = require('multer');
const { addProduct, getProducts } = require('../controllers/productController');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/add', upload.single('imagen'), addProduct);
router.get('/', getProducts);

module.exports = router;
