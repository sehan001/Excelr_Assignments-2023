// ParentComponent.js

import React, { useState, useEffect } from "react";
import Dashboard from "./Dashboard";

const ParentComponent = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://api.example.com/users");
        const data = await response.json();
        setUsers(data); // Set fetched users in state
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []); // Empty dependency array to run once on component mount

  return (
    <div>
      <h1>User Management System</h1>
      <Dashboard users={users} /> {/* Pass fetched users to Dashboard */}
    </div>
  );
};

export default ParentComponent;
