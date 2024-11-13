const mongoose = require('mongoose');

//patients details from Doctor
const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  dueDate: { type: Date, required: true },
  status: { type: String, default: 'Pending' },
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
});

module.exports = mongoose.model('Task', taskSchema);
