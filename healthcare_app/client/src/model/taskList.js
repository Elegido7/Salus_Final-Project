import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTasks = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('No token found in localStorage.');
        setError('You must be logged in to view tasks.');
        setLoading(false);
        return;
      }

      try {
        console.log('Fetching tasks with token:', token);
        const response = await axios.get('/api/tasks', {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log('Tasks fetched:', response.data);
        setTasks(response.data);
      } catch (err) {
        console.error('Error fetching tasks:', err.response || err.message);
        setError(err.response?.data?.error || 'An error occurred while fetching tasks.');
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  if (loading) return <p>Loading tasks...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div className="TaskList">
      <h2>Your Tasks</h2>
      {tasks.length === 0 ? (
        <p>No tasks available. Create a new task to get started!</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task._id}>
              <h3>{task.title}</h3>
              <p>
                <strong>Doctor ID:</strong> {task.doctorId} {/* Displaying the doctor ID */}
              </p>
              <p>{task.description}</p>
              <p>
                <strong>Deadline:</strong> {new Date(task.dueDate).toLocaleDateString()}
              </p>
              <p>
                <strong>Status:</strong> {task.status}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
