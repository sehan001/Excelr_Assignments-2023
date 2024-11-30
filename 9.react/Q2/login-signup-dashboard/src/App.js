import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [users, setUsers] = useState([]);

  const handleLogin = (username) => {
    setLoggedInUser(username);
    setUsers([...users, { username }]);
  };

  const handleSignup = (newUser) => {
    console.log("New user registered:", newUser);
  };

  return (
    <Router>
      <div>
        <h1>Login and Signup App</h1>
        <Routes>
          <Route
            path="/"
            element={
              loggedInUser ? (
                <Navigate to="/dashboard" />
              ) : (
                <Login onLogin={handleLogin} />
              )
            }
          />
          <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
          <Route
            path="/dashboard"
            element={
              loggedInUser ? (
                <Dashboard username={loggedInUser} users={users} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
