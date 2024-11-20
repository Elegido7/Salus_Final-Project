import mongoose from 'mongoose';

// Define task schema for the Doctor's tasks
const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  dueDate: { type: Date, required: true },
  status: { type: String, default: 'Pending' },
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
});

export default mongoose.model('Task', taskSchema);
