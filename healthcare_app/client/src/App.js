import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/navbar';
import LoginForm from './model/LoginForm';
import RegisterForm from './model/RegisterForm';
import TaskForm from './model/taskForm';
import TaskList from './model/taskList';
import HomePage from './components/HomePage';
import LogoutForm from './model/logoutForm';
import './App.css';

function PrivateRoute({ children }) {
  const isAuthenticated = localStorage.getItem('token') ? true : false;
  return isAuthenticated ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route
              path="/task-management"
              element={
                <PrivateRoute>
                  <div>
                    <h1>Task Management</h1>
                    <TaskForm />
                    <TaskList />
                  </div>
                </PrivateRoute>
              }
            />
            <Route path="/logout" element={<LogoutForm />} /> {/* Add route for logout */}
            <Route path="*" element={<h1>404: Page Not Found</h1>} />
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;
