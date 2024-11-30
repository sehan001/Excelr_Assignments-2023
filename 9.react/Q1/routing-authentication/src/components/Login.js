import React from 'react';
import './Login.css'; 

const Login = ({ onLogin }) => {
  const handleLogin = () => {
    onLogin({ username: 'user123', email: 'user123@example.com' });
  };

  return (
    <div className="container">
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
