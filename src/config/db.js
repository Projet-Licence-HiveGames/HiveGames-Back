// src/config/db.js
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');

// Charger les variables d'environnement
const MYSQL_DB = process.env.MYSQL_DB;
const MYSQL_USER = process.env.MYSQL_USER;
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD;
const MYSQL_HOST = process.env.MYSQL_HOST;
const MYSQL_PORT = process.env.PORT;

// Configuration de la connexion à la base de données MySQL
const sequelize = new Sequelize(MYSQL_DB, MYSQL_USER, MYSQL_PASSWORD, {
    host: MYSQL_HOST,
    port: MYSQL_PORT,
    dialect: 'mysql',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: true, // Vérifie l'autorité de certification
            ca: fs.readFileSync(path.join(__dirname, '../certs/ca.pem')), // Chemin vers le certificat CA
        }
    },
});

// Test de la connexion à la base de données
sequelize.authenticate()
    .then(() => console.log('MySQL connection has been established successfully.'))
    .catch((error) => console.error('Unable to connect to the database:', error));

module.exports = sequelize; // Exporter l'instance sequelize pour l'utiliser ailleurs