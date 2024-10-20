// src/routes/userRoutes.js
const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// Route pour obtenir la liste des utilisateurs
router.get('/', userController.getUsers);

// Route pour créer un nouvel utilisateur
router.post('/', userController.createUser);

// Export du routeur
module.exports = router;
