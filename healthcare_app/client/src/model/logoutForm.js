// src/model/LogoutForm.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutForm = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Remove the token from localStorage
    localStorage.removeItem('token');

    // Redirect the user to the login page
    navigate('/login');
  }, [navigate]);

  return (
    <div>
      <h1>Logging out...</h1>
    </div>
  );
};

export default LogoutForm;
