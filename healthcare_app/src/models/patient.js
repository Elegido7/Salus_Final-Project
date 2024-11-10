const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  contactNumber: { type: String, required: true },
  nationalId: { type: String, required: true },
  homeLocation: { type: String, required: true },
  nearestHealthFacility: { type: String, required: true },
  symptoms: { type: String, required: true },
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' },
});

module.exports = mongoose.model('Patient', patientSchema);
