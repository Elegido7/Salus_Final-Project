const express = require('express');
const router = express.Router();
const Task = require('../models/Task');
const { authenticate } = require('./doctorRoutes');

// POST /tasks - Create a new task for the logged-in doctor
router.post('/', authenticate, async (req, res) => {
  const { title, description, dueDate } = req.body;
  const newTask = new Task({ title, description, dueDate, doctorId: req.userId });

  try {
    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /tasks/:doctorId - Get all tasks for a doctor
router.get('/:doctorId', async (req, res) => {
  try {
    const tasks = await Task.find({ doctorId: req.params.doctorId });
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
