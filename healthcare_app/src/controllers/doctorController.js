const Doctor = require('../models/doctor');

// Get doctor's details, including hospitals and patient list
exports.getDoctorDetails = async (req, res) => {
  const { doctorId } = req.params;
  try {
    const doctor = await Doctor.findById(doctorId).populate('patients');
    res.render('doctorPage', { doctor });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Get list of patients for a doctor
exports.listPatients = async (req, res) => {
  const { doctorId } = req.params;
  try {
    const doctor = await Doctor.findById(doctorId).populate('patients');
    res.render('patientList', { patients: doctor.patients });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Create a new doctor
exports.createDoctor = async (req, res) => {
  try {
    const doctor = new Doctor(req.body); // Assumes req.body contains the doctor data
    await doctor.save();
    res.status(201).json(doctor);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create doctor', error });
  }
};

// Get all doctors
exports.getDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.status(200).json(doctors);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve doctors', error });
  }
};

// Get a specific doctor by ID
exports.getDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.doctorId);
    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }
    res.status(200).json(doctor);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve doctor', error });
  }
};

// Update a doctor by ID
exports.updateDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findByIdAndUpdate(req.params.doctorId, req.body, { new: true });
    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }
    res.status(200).json(doctor);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update doctor', error });
  }
};

// Delete a doctor by ID
exports.deleteDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findByIdAndDelete(req.params.doctorId);
    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }
    res.status(200).json({ message: 'Doctor deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete doctor', error });
  }
};
