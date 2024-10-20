// backend/src/app.js
const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Middleware
app.use(cors()); // Autoriser CORS
app.use(express.json()); // Parser les requêtes JSON

// Route de test
app.use('/api/users', userRoutes);

// Gestion des erreurs 404
app.use((req, res, next) => {
    res.status(404).json({ message: 'Resource not found' });
});

module.exports = app;
