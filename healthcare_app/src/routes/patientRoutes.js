const express = require('express');
const router = express.Router();
const Patient = require('../models/Patient');

// Add a new patient
router.post('/', async (req, res) => {
  const { name, contact, symptoms, age } = req.body;
  const newPatient = new Patient({ name, contact, symptoms, age });
  try {
    const savedPatient = await newPatient.save();
    res.status(201).json(savedPatient);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all patients
router.get('/', async (req, res) => {
  try {
    const patients = await Patient.find();
    res.status(200).json(patients);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a patient
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, contact, symptoms, age } = req.body;
  try {
    const updatedPatient = await Patient.findByIdAndUpdate(
      id,
      { name, contact, symptoms, age },
      { new: true }
    );
    if (!updatedPatient) {
      return res.status(404).json({ error: 'Patient not found' });
    }
    res.status(200).json(updatedPatient);
  } catch (err) {
    console.error('Error updating patient:', err); // Log the error for debugging
    res.status(500).json({ error: err.message });
  }
});

// Delete a patient
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedPatient = await Patient.findByIdAndDelete(id);
    if (!deletedPatient) {
      return res.status(404).json({ error: 'Patient not found' });
    }
    res.status(200).json({ message: 'Patient deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
