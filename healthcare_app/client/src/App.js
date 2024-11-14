import React from 'react';
import LoginForm from './model/LoginForm';
import RegisterForm from './model/RegisterForm';
import './App.css';

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
    </>
  );
}

export default App;
