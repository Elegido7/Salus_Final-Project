import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (!token) {
      setError('You must be logged in to create tasks.');
      return;
    }

    const taskData = { title, description, dueDate }; // No need to format dueDate
    try {
      await axios.post('/api/tasks', taskData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSuccess('Task created successfully!');
      setTitle('');
      setDescription('');
      setDueDate('');
      setError('');
    } catch (err) {
      setError(err.response?.data?.error || 'An error occurred while creating the task.');
    }
  };

  return (
    <div className="Task">
      <h2>New Task Form</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <form onSubmit={handleSubmit} id="taskForm">
        <div>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Title"
          />
        </div>
        <div>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"></textarea>
        </div>
        <div>
          <label htmlFor="dueDate">Due Date:</label>
          <input
            type="date"
            id="dueDate"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
            placeholder="Due Date"
          />
        </div>
        <button type="submit">Create Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
