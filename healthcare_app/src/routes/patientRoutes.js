const express = require('express');
const { getDoctorsList, registerPatient } = require('../controllers/patientController');
const router = express.Router();
const patientController = require('../controllers/patientController');

// Patient page with doctor list and registration form
router.get('/doctors', getDoctorsList);
router.post('/register', registerPatient);

// Create a patient
router.post('/', patientController.createPatient);

// Get all patients
router.get('/', patientController.getPatients);

// Get a specific patient
router.get('/:patientId', patientController.getPatient);

// Update a patient
router.put('/:patientId', patientController.updatePatient);

// Delete a patient
router.delete('/:patientId', patientController.deletePatient);

module.exports = router;
