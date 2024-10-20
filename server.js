// backend/src/server.js
require('dotenv').config(); // Charger les variables d'environnement
const sequelize = require('./src/config/db');
const app = require('./src/app');
const port = process.env.PORT || 5000;

// Synchronisation des modèles avec la base de données
sequelize.sync({ force: false }) // `force: true` recrée les tables à chaque démarrage
    .then(() => {
        console.log('Database synced successfully');
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch((error) => {
        console.error('Error syncing the database:', error);
    });