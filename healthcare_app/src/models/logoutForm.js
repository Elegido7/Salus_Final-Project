// LogoutForm.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutForm = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove token from localStorage
    localStorage.removeItem('token');

    // Redirect the user to the login page or home page
    navigate('/login');
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </form>
  );
};

export default LogoutForm;
