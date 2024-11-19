const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: 'http://127.0.0.1:5500', // Dirección del frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
}));

// Importar las rutas
const productRoutes = require('./routes/productRoutes');

// Definir las rutas
app.use('/products', productRoutes);

// Ruta para la raíz
app.get('/', (req, res) => {
  res.send('Bienvenido a la API de Cafe Arandia 2.0');
});

// Iniciar el servidor
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
