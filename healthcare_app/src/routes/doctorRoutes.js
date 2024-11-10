const express = require('express');
const { getDoctorDetails, listPatients } = require('../controllers/doctorController');
const router = express.Router();
const doctorController = require('../controllers/doctorController');

// Doctor's main page with introduction, hospitals, and patient list
router.get('/:doctorId', getDoctorDetails);
router.get('/:doctorId/patients', listPatients);

// Create a doctor
router.post('/', doctorController.createDoctor);

// Get all doctors
router.get('/', doctorController.getDoctors);

// Get a specific doctor
router.get('/:doctorId', doctorController.getDoctor);

// Update a doctor
router.put('/:doctorId', doctorController.updateDoctor);

// Delete a doctor
router.delete('/:doctorId', doctorController.deleteDoctor);

module.exports = router;
