import React, { useState, useEffect } from 'react';

const CreateTaskForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleCreateTask = async (taskData) => {
    const yourToken = 'your-token-here'; // Define yourToken here
    try {
      const response = await fetch('/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${yourToken}`,
        },
        body: JSON.stringify(taskData),
      });
      const result = await response.json();
      if (response.ok) {
        console.log('Task created successfully:', result);
      } else {
        console.error('Error creating task:', result.error);
      }
    } catch (err) {
      console.error('Network error:', err.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreateTask({ title, description, dueDate });
    setTitle('');
    setDescription('');
    setDueDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </label>
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <label>
        Due Date:
        <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required />
      </label>
      <button type="submit">Create Task</button>
    </form>
  );
};

const TaskList = ({ doctorId }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const yourToken = 'your-token-value';
        const response = await fetch(`/tasks/${doctorId}`, {
          headers: {
            Authorization: `Bearer ${yourToken}`,
          },
        });
        const data = await response.json();
        if (response.ok) {
          setTasks(data);
        } else {
          console.error('Error fetching tasks:', data.error);
        }
      } catch (err) {
        console.error('Network error:', err.message);
      }
    };
    fetchTasks();
  }, [doctorId]);

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task._id}>
          <h3>{task.title}</h3>
          <p>Status: {task.status}</p>
          <p>Deadline: {new Date(task.dueDate).toLocaleDateString()}</p>
          <p>Description: {task.description}</p>
        </li>
      ))}
    </ul>
  );
};

export { CreateTaskForm, TaskList };
