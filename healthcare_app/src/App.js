require('dotenv').config({ path: './config/health.env' });
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const Doctor = require('./models/doctor');
const Patient = require('./models/patient');

const app = express();

// Set up Pug as the view engine
app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static(path.join(__dirname, 'public')));

// Log the Mongo URL for debugging
console.log('Mongo URL:', process.env.MONGO_URL);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Route to display both doctor and patient data
app.get('/', async (req, res) => {
  try {
    // Fetch all doctors and patients from the database
    const doctors = await Doctor.find();
    const patients = await Patient.find();

    // Render the index.pug file with both doctors and patients data
    res.render('index', { doctors, patients });
  } catch (error) {
    res.status(500).send('Error fetching data');
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
