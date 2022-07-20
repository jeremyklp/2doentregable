// Models
const { Task } = require('../models/task.model');

const getAllTask = async (req, res) => {
	try {
		const tasks = await Tost.findAll();

		res.status(200).json({
			status: 'success',
			tasks,
		});
	} catch (err) {
		console.log(err);
	}
};

const createTask = async (req, res) => {
	try {
		const { title, userId, limitDate, startDate } = req.body;

		const newTask = await Task.create({
			title,
			userId,
            limitDate,
            startDate

		});

		res.status(201).json({
			status: 'success',
			newTask,
		});
	} catch (err) {
		next(err);
	}
};

const getTaskById = async (req, res) => {
	const { id } = req.params;

	const task = await Task.findOne({ where: { id } });

	if (!task) {
		return res.status(404).json({
			status: 'error',
			message: 'task not found',
		});
	}

	res.status(200).json({
		status: 'success',
		task,
	});
};

const updateTask = async (req, res, next) => {
	const { id } = req.params;
	const { title, content } = req.body;

	const task = await Task.findOne({ where: { id } });

	if (!task) {
		return res.status(404).json({
			status: 'error',
			message: 'task not found',
		});
	}

	await task.update({ title, content });

	res.status(204).json({ status: 'success' });
};

const deleteTask = async (req, res) => {
	const { id } = req.params;

	const task = await Task.findOne({ where: { id } });

	if (!task) {
		return res.status(404).json({
			status: 'error',
			message: 'task not found',
		});
	}

	await task.update({ status: 'deleted' });

	res.status(204).json({ status: 'success' });
};

module.exports = {
	getAllTask,
	createTask,
	getTaskById,
	updateTask,
	deleteTask,
};
