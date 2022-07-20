const express = require('express');

// Controllers
const {
	getAllTask,
	createTask,
	getTaskById,
	updateTask,
	deleteTask,
} = require('../controllers/task.controller');

const tasksRouter = express.Router();

tasksRouter.get('/', getAllTask);

tasksRouter.post('/', createTask);

tasksRouter.get('/:id', getTaskById);

tasksRouter.patch('/:id', updateTask);

tasksRouter.delete('/:id', deleteTask);

module.exports = { tasksRouter };
