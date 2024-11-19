const express = require('express');
const cors = require('cors'); // Habilitar CORS
const app = express();

// Middleware
app.use(express.json());
app.use(cors()); // Habilitar CORS para todas las solicitudes

// Importar las rutas
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const recipeRoutes = require('./routes/recipeRoutes');
const reviewRoutes = require('./routes/reviewRoutes');

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
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
