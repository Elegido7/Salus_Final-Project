// routes/doctorRoutes.js
const express = require('express');
const router = express.Router();
const Doctor = require('../models/Doctor');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Middleware to verify JWT
const authenticate = (req, res, next) => {
  // Extract the token from the Authorization header
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ error: 'Access denied. No token provided.' });

  try {
    // Verify and decode the JWT
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.doctorId = decoded.id; // Attach doctor ID to request object for later use
    next();
  } catch (error) {
    res.status(400).json({ error: 'Invalid token.' });
  }
};

// Register a new doctor (public route)
router.post('/register', async (req, res) => {
  const { name, title, description, hospitals, contactDetails, password } = req.body;
  const newDoctor = new Doctor({ name, title, description, hospitals, contactDetails, password });

  try {
    // Save the new doctor to the database
    const savedDoctor = await newDoctor.save();
    res.status(201).json(savedDoctor);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Login a doctor and issue a JWT (public route)
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    // Find the doctor by email
    const doctor = await Doctor.findOne({ 'contactDetails.email': email });
    if (!doctor) return res.status(400).json({ error: 'Doctor not found' });

    // Check if the password matches
    const isMatch = await doctor.comparePassword(password);
    if (!isMatch) return res.status(400).json({ error: 'Invalid password' });

    // Generate JWT token
    const token = doctor.generateJWT();
    res.status(200).json({ token }); // Send the token as response
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all doctors (protected route)
router.get('/', authenticate, async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.status(200).json(doctors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update doctor information by ID (protected route)
router.put('/:id', authenticate, async (req, res) => {
  const { name, title, description, hospitals, contactDetails, password } = req.body;
  const updateData = { name, title, description, hospitals, contactDetails };

  // If a new password is provided, hash it before updating
  if (password) {
    try {
      const salt = await bcrypt.genSalt(10);
      updateData.password = await bcrypt.hash(password, salt);
    } catch (error) {
      return res.status(500).json({ error: 'Error hashing password' });
    }
  }

  try {
    // Find doctor by ID and update with new data
    const updatedDoctor = await Doctor.findByIdAndUpdate(req.params.id, updateData, { new: true });
    if (!updatedDoctor) return res.status(404).json({ error: 'Doctor not found' });
    res.status(200).json(updatedDoctor);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a doctor by ID (protected route)
router.delete('/:id', authenticate, async (req, res) => {
  try {
    // Find and delete the doctor by ID
    const deletedDoctor = await Doctor.findByIdAndDelete(req.params.id);
    if (!deletedDoctor) return res.status(404).json({ error: 'Doctor not found' });
    res.status(200).json({ message: 'Doctor deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
