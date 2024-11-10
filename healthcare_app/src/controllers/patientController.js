const Doctor = require('../models/doctor');
const Patient = require('../models/patient');

// Get list of all doctors for patient to select
exports.getDoctorsList = async (req, res) => {
  try {
    const doctors = await Doctor.find({});
    res.render('patientPage', { doctors });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Register a new patient and save data to MongoDB
exports.registerPatient = async (req, res) => {
  const { fullName, contactNumber, nationalId, homeLocation, nearestHealthFacility, symptoms } =
    req.body;
  try {
    const patient = new Patient({
      fullName,
      contactNumber,
      nationalId,
      homeLocation,
      nearestHealthFacility,
      symptoms,
    });
    await patient.save();
    res.send('Patient registered successfully');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Create a new patient
exports.createPatient = async (req, res) => {
  try {
    const patient = new Patient(req.body); // Assumes req.body contains the patient data
    await patient.save();
    res.status(201).json(patient);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create patient', error });
  }
};

// Get all patients
exports.getPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve patients', error });
  }
};

// Get a specific patient by ID
exports.getPatient = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.patientId);
    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }
    res.status(200).json(patient);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve patient', error });
  }
};

// Update a patient by ID
exports.updatePatient = async (req, res) => {
  try {
    const patient = await Patient.findByIdAndUpdate(req.params.patientId, req.body, { new: true });
    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }
    res.status(200).json(patient);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update patient', error });
  }
};

// Delete a patient by ID
exports.deletePatient = async (req, res) => {
  try {
    const patient = await Patient.findByIdAndDelete(req.params.patientId);
    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }
    res.status(200).json({ message: 'Patient deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete patient', error });
  }
};
