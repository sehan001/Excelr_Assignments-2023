import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setIsLoggedIn(true);
    setUser(userData);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <Router>
      <div>
        <h1 style={{ textAlign: 'center' }}>Routing with Authentication</h1>
        <Routes>
          <Route
            path="/"
            element={isLoggedIn ? <Navigate to="/home" /> : <Login onLogin={handleLogin} />}
          />
          <Route
            path="/home"
            element={isLoggedIn ? <Home user={user} /> : <Navigate to="/" />}
          />
        </Routes>
        {isLoggedIn && (
          <button onClick={handleLogout}>Logout</button>
        )}
      </div>
    </Router>
  );
};

export default App;
