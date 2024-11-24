import mongoose from 'mongoose';

// Define the patient schema
const patientSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    contact: { type: String, required: true },
    symptoms: { type: String, required: true },
    age: { type: Number, required: true },
  },
  { timestamps: true }
);

export default mongoose.model('Patient', patientSchema);
