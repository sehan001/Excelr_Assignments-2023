import React from 'react';
import './Home.css'; 

const Home = ({ user }) => {
  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Email: {user.email}</p>
      <p>Welcome to Home Page.</p>
    </div>
  );
};

export default Home;
