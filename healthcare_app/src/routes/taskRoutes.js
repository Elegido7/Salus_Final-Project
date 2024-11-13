const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Create a task
router.post('/', async (req, res) => {
  const { title, description, dueDate, doctorId } = req.body;
  const newTask = new Task({ title, description, dueDate, doctorId });
  try {
    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all tasks for a doctor
router.get('/:doctorId', async (req, res) => {
  try {
    const tasks = await Task.find({ doctorId: req.params.doctorId });
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
