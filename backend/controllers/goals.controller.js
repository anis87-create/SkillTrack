const { query } = require("../config/db");
const GoalService = require("../repositories/goals");
const { asyncHandler } = require("../middlewares/asyncHandler");

const getAllGoals = asyncHandler(async (req, res, next) => {
    const goals = await GoalService.getAll();
    res.status(200).json(goals);
});

const addGoal = asyncHandler(async (req, res, next) => {
    const { name, date, description } = req.body;
    if(name.length < 0){
        return res.status(400).json({msg:'the name must be not empty'});
    }
    const result = await GoalService.getGoalByName(name);
    if(result.rowCount > 0){
        return res.status(404).json({msg:'Goal already exist'})
    }
    const createdGoal = await GoalService.create(name, date, description);
    res.status(200).json({msg:'Goal created', data: createdGoal});
});

const removeGoal = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const deletedGoal = await GoalService.remove(id);    
    res.status(200).json({msg:'goal is deleted', data: deletedGoal});

});

const updateGoal = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const { name, date, description } = req.body; 
    const goalUpdated = await GoalService.update(id, name, date, description);
    res.status(200).json({msg:'goal is updated', data:goalUpdated});
});

const getGoal = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const goal = await GoalService.getOneGoal(id);
    if(!goal){
        return res.status(404).json({msg:'the goal is not found'});
    }
    res.status(200).json(goal);
});


module.exports = {
    getAllGoals,
    addGoal,
    removeGoal,
    updateGoal,
    getGoal,
}