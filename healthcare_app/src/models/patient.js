import mongoose from 'mongoose';

// Check if mongoose is already connected
if (mongoose.connection.readyState === 0) {
  mongoose.connect('your_connection_string', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

//patient schema defined
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
