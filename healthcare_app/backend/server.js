require('dotenv').config({ path: './health.env' });
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

console.log('Environment Variables:', process.env);

const app = express();

app.use(express.json());
app.use(cors());

const mongoUrl = process.env.MONGODB_URL;
console.log('MongoDB URL:', mongoUrl);

mongoose
  .connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/tasks', require('./routes/taskRoutes'));
app.use('/api/profile', require('./routes/profileRoutes'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, '../frontend/build')));
  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../frontend/build/index.html')));
}

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Backend is running on port ${port}`);
});
