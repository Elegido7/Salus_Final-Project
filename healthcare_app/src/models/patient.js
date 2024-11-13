const mongoose = require('mongoose');

//patient schema defined
const patientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contact: { type: String, required: true },
  symptoms: { type: String, required: true },
  age: { type: Number, required: true },
});

module.exports = mongoose.model('Patient', patientSchema);
