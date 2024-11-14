import React, { useState } from 'react';
import axios from 'axios';

const PatientForm = () => {
  const [patientData, setPatientData] = useState({
    name: '',
    age: '',
    contact: '',
    symptoms: '',
  });

  const handleChange = (e) => {
    setPatientData({ ...patientData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace with your actual API endpoint to save patient data
      await axios.post('http://localhost:3000/api/patients', patientData);
      alert('Patient information saved successfully!');
    } catch (error) {
      console.error('Error saving patient data:', error);
      alert('Failed to save patient information.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Enter Patient Details</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={patientData.name}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={patientData.age}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="contact"
        placeholder="Contact"
        value={patientData.contact}
        onChange={handleChange}
        required
      />
      <textarea
        name="symptoms"
        placeholder="Symptoms"
        value={patientData.symptoms}
        onChange={handleChange}
        required
      />
      <button type="submit">Submit Patient Info</button>
    </form>
  );
};
export default PatientForm;
