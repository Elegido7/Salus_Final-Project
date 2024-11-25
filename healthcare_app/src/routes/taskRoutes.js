import express from 'express';
import { body, validationResult } from 'express-validator';
import Task from '../models/Task.js';
import authenticate from '../middleware/authenticate.js';

const router = express.Router();

router.post(
  '/',
  authenticate,
  [
    body('title').notEmpty().withMessage('Title is required'),
    body('description').notEmpty().withMessage('Description is required'),
    body('dueDate').isISO8601().withMessage('Due date must be a valid date'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, description, dueDate } = req.body;
    const newTask = new Task({
      title,
      description,
      dueDate,
      doctorId: req.doctorId,
    });

    try {
      const savedTask = await newTask.save();
      res.status(201).json({ success: true, data: savedTask });
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  }
);

// GET /tasks - Retrieve all tasks for the logged-in doctor
router.get('/tasks', authenticate, async (req, res) => {
  try {
    const tasks = await Task.find({ doctorId: req.doctorId, isDeleted: false });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch tasks.' });
  }
});

// PUT /tasks/:id - Update a task
router.put('/:id', authenticate, async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, doctorId: req.doctorId },
      req.body,
      { new: true }
    );
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE /tasks/:id - Delete a task
router.delete('/:id', authenticate, async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({ _id: req.params.id, doctorId: req.doctorId });
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
