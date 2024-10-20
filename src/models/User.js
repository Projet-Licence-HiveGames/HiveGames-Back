// src/models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

// Définition du modèle User
const User = sequelize.define('User', {
    // Attributs du modèle (les colonnes dans la table)
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'users', // Nom de la table dans MySQL
    timestamps: true, // Ajoute createdAt et updatedAt automatiquement
});

module.exports = User;
