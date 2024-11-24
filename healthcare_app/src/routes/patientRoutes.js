import express from 'express';
import { body, validationResult } from 'express-validator';
import Patient from '../models/patient.js';

const router = express.Router();

// Add a new patient
router.post(
  '/',
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('contact').isString().withMessage('Contact must be a valid string'),
    body('symptoms').notEmpty().withMessage('Symptoms are required'),
    body('age').isInt({ min: 0 }).withMessage('Age must be a non-negative integer'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { name, contact, symptoms, age } = req.body;
    const newPatient = new Patient({ name, contact, symptoms, age });

    try {
      const savedPatient = await newPatient.save();
      res.status(201).json({ success: true, data: savedPatient });
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  }
);

// Get all patients
router.get('/', async (req, res) => {
  try {
    const patients = await Patient.find();
    res.status(200).json({ success: true, data: patients });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Update a patient
router.put(
  '/:id',
  [
    body('name').optional().isString().withMessage('Name must be a string'),
    body('contact').optional().isString().withMessage('Contact must be valid'),
    body('symptoms').optional().isString().withMessage('Symptoms must be valid'),
    body('age').optional().isInt({ min: 0 }).withMessage('Age must be a non-negative integer'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { id } = req.params;
    const updateData = req.body;

    try {
      const updatedPatient = await Patient.findByIdAndUpdate(id, updateData, { new: true });
      if (!updatedPatient) {
        return res.status(404).json({ success: false, error: 'Patient not found' });
      }
      res.status(200).json({ success: true, data: updatedPatient });
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  }
);

// Delete a patient
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedPatient = await Patient.findByIdAndDelete(id);
    if (!deletedPatient) {
      return res.status(404).json({ success: false, error: 'Patient not found' });
    }
    res.status(200).json({ success: true, message: 'Patient deleted successfully' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
