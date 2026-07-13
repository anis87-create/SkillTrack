const express = require('express');
// Centralised environment configuration (loads .env and validates)
require('./config/env');

const app = express();
const PORT = process.env.PORT || 5000;
const goalsRoute = require('./routes/goals.js');
const usersRoute = require('./routes/users');
const cors = require('cors');
const helmet = require('helmet');
const globalErrorHanlder = require('./middlewares/errorHandler.js');
const db = require('./config/db.js');
const rateLimit = require('express-rate-limit');
app.use(helmet());
app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
}));
app.use(express.json({limit:'10kb'}));

// Configure CORS to explicitly allow the frontend origin and credentials
const corsOptions = {
   origin: process.env.FRONTEND_URL || 'http://localhost:5173',
   credentials: true,
   methods: ['GET','POST','PUT','DELETE','OPTIONS'],
   allowedHeaders: ['Content-Type','Authorization','Accept'],
};
app.use(cors(corsOptions));
// Note: don't call app.options with a pattern containing '*' —
// path-to-regexp will throw. `app.use(cors(corsOptions))` already handles preflight.

app.use('/api/goals', goalsRoute);
app.use('/api/users', usersRoute);
app.use(globalErrorHanlder);

async function start() {
   try {
      await db.query('SELECT 1');
      
   } catch (err) {
      console.error('Impossible de se connecter à PostgreSQL au démarrage:', err.message);
      process.exit(1);
   }
   app.listen(PORT, () => {
     console.log(`Server successfully started on port ${PORT}...`)
   });
}

start();






