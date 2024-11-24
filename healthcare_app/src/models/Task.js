import mongoose from 'mongoose';

// Define task schema for the Doctor's tasks
const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, default: '' },
    dueDate: {
      type: Date,
      required: true,
      validate: {
        validator: function (value) {
          return value >= new Date();
        },
        message: 'Due date cannot be in the past',
      }, //Ensure dueDate is not in the past when a task is created
    },
    status: {
      type: String,
      enum: ['Pending', 'In Progress', 'Completed'], //enum restricts the status field to predefined values
      default: 'Pending',
    },
    doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Doctor',
      required: true,
    },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model('Task', taskSchema);
