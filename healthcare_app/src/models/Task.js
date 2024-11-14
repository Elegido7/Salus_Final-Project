const mongoose = require('mongoose');

//patients details from Doctor
const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  dueDate: { type: Date, required: true },
  status: { type: String, default: 'Pending' },
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
});

// GET /tasks - Retrieve all tasks for the logged-in doctor
router.get('/', authenticate, async (req, res) => {
  try {
    const tasks = await Task.find({ doctorId: req.userId });
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT /tasks/:id - Update a task
router.put('/:id', authenticate, async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, doctorId: req.userId },
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
    const task = await Task.findOneAndDelete({ _id: req.params.id, doctorId: req.userId });
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = mongoose.model('Task', taskSchema);
