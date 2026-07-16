const  route  = require('express').Router();
const goalsCtrl = require('../controllers/goals.controller');

route.get('/', goalsCtrl.getAllGoals);
route.post('/', goalsCtrl.addGoal);
route.delete('/:id', goalsCtrl.removeGoal);
route.put('/:id', goalsCtrl.updateGoal);
route.get('/:id', goalsCtrl.getGoal);

module.exports = route;