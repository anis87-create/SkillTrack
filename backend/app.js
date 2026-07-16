const express = require('express');
// Centralised environment configuration (loads .env and validates)

const app = express();
// Trust the first hop from a reverse proxy so express-rate-limit can read
// X-Forwarded-For safely instead of throwing a ValidationError.
app.set('trust proxy', 1);
const goalsRoute = require('./routes/goals.js');
const usersRoute = require('./routes/users');
const cors = require('cors');
const helmet = require('helmet');
const globalErrorHanlder = require('./middlewares/errorHandler.js');

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
const authLimit = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { msg: 'Too many attempts, please try again later.' },
});
app.use('/api/goals', goalsRoute);
app.use('/api/auth',authLimit, usersRoute);
app.use(globalErrorHanlder);

module.exports = app;