import React from 'react';
import LoginForm from './model/LoginForm';
import RegisterForm from './model/RegisterForm';
import './App.css';
import TaskForm from './model/taskForm';
import TaskList from './model/taskList';

function App() {
  return (
    <>
      <div>
        <h1> HealthCare Portal</h1>
      </div>
      <div className="App">
        <RegisterForm />
        <LoginForm />
      </div>
      <h1>Task Management</h1>
      <div id="taskManage">
        <TaskForm />
        <TaskList />
      </div>
      <div>
        <h1>Update Database</h1>
      </div>
    </>
  );
}

export default App;
