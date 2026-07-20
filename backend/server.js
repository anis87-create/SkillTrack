
// Allow requiring .ts controllers/services/repositories directly from JS entry points
require('tsx/cjs');

// Centralised environment configuration (loads .env and validates)
require('./config/env');
const app = require('./app.js');
const PORT = process.env.PORT || 5000;
const { query } = require('./config/db');


async function start() {
   try {
      await query('SELECT 1');
      
   } catch (err) {
       if (err) {
         console.error('Échec du démarrage du serveur :', err.message || err);
         process.exit(1);
      }
      process.exit(1);
   }
   app.listen(PORT, () => {
     console.log(`Server successfully started on port ${PORT}...`)
   });
}

start();






