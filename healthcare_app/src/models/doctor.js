const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String },
  hospitals: [{ type: String }],
  patients: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Patient' }],
  contactDetails: {
    email: { type: String, required: true },
    phone: { type: String, required: true },
  },
});

module.exports = mongoose.model('Doctor', doctorSchema);
