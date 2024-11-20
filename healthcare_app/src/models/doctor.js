import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

// Define doctor schema
const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  hospitals: [{ type: String }],
  password: { type: String, required: true },
  contactDetails: {
    email: { type: String, required: true },
    phone: { type: String, required: true },
  },
});

// Middleware to hash password before saving
doctorSchema.pre('save', async function (next) {
  // Only hash if password is new or has been modified
  if (!this.isModified('password')) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Method to compare password for login
doctorSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

// Generate JWT token
doctorSchema.methods.generateJWT = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

export default mongoose.model('Doctor', doctorSchema);
