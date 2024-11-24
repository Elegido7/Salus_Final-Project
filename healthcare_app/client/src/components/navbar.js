// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Navbar() {
  const username = localStorage.getItem('username');

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">HealthCare Portal</div>
        <ul className="navbar-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/task-management">Task Management</Link>
          </li>
          {username && (
            <li>
              <Link to="/logout">Logout ({username})</Link> {/* Display username if logged in */}
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
