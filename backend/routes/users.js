const  route  = require('express').Router();
const userCtrl = require('../controllers/users.controller');
const protect = require('../middlewares/protect');


route.post('/register', userCtrl.register);
route.post('/login', userCtrl.login);
route.get('/me', protect, userCtrl.authMe);

module.exports = route;