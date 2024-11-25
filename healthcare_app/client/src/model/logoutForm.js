import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutForm = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Debug token removal
    const token = localStorage.getItem('token');
    if (token) {
      console.log('Logging out, token found:', token);
      localStorage.removeItem('token');
    } else {
      console.warn('No token found during logout.');
    }

    // Redirect to login
    navigate('/login');
  }, [navigate]);

  return (
    <div>
      <h1>Logging out...</h1>
    </div>
  );
};

export default LogoutForm;
