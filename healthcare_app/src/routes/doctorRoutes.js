import express from 'express';
import bcrypt from 'bcryptjs';
import { body, validationResult } from 'express-validator';
import Doctor from '../models/doctor.js';
import authenticate from '../middleware/authenticate.js';

const router = express.Router();

// Register a new doctor (public route)
router.post(
  '/register',
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('title').notEmpty().withMessage('Title is required'),
    body('contactDetails.email').isEmail().withMessage('Valid email is required'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { name, title, description, hospitals, contactDetails, password } = req.body;

    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newDoctor = new Doctor({
        name,
        title,
        description,
        hospitals,
        contactDetails,
        password: hashedPassword,
      });

      const savedDoctor = await newDoctor.save();
      res.status(201).json({ success: true, data: savedDoctor });
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  }
);

// Login a doctor and issue a JWT (public route)
router.post(
  '/login',
  [
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').notEmpty().withMessage('Password is required'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      const doctor = await Doctor.findOne({ 'contactDetails.email': email });
      if (!doctor) return res.status(400).json({ success: false, error: 'Invalid credentials' });

      const isMatch = await bcrypt.compare(password, doctor.password);
      if (!isMatch) return res.status(400).json({ success: false, error: 'Invalid credentials' });

      const token = doctor.generateJWT();
      res.status(200).json({ success: true, token });
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  }
);

// Get all doctors (protected route)
router.get('/', authenticate, async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.status(200).json({ success: true, data: doctors });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Update doctor information by ID (protected route)
router.put('/:id', authenticate, async (req, res) => {
  const { password, ...updateData } = req.body;

  if (password) {
    try {
      const salt = await bcrypt.genSalt(10);
      updateData.password = await bcrypt.hash(password, salt);
    } catch (err) {
      return res.status(500).json({ success: false, error: 'Error hashing password' });
    }
  }

  try {
    const updatedDoctor = await Doctor.findByIdAndUpdate(req.params.id, updateData, { new: true });
    if (!updatedDoctor) return res.status(404).json({ success: false, error: 'Doctor not found' });
    res.status(200).json({ success: true, data: updatedDoctor });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Delete a doctor by ID (protected route)
router.delete('/:id', authenticate, async (req, res) => {
  try {
    const deletedDoctor = await Doctor.findByIdAndDelete(req.params.id);
    if (!deletedDoctor) return res.status(404).json({ success: false, error: 'Doctor not found' });
    res.status(200).json({ success: true, message: 'Doctor deleted successfully' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
