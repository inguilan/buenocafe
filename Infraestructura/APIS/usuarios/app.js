/**
 * Christian Santacruz 
 * 
 * David Inguilan
 * 
 * Cafe Arandia 2.0
 * 
 * App.js
 */

const express = require('express');
const app = express();

// Importar las rutas
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const recipeRoutes = require('./routes/recipeRoutes');
const reviewRoutes = require('./routes/reviewRoutes');

// Middleware para parsear JSON
app.use(express.json()); 

// Definir las rutas
app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/recipes', recipeRoutes);
app.use('/reviews', reviewRoutes);

// Ruta para la raíz
app.get('/', (req, res) => {
  res.send('Bienvenido a la API de Cafe Arandia 2.0');
});

// Definir el puerto y arrancar el servidor
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
