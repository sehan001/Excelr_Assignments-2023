import React from "react";

const Dashboard = ({ username, users }) => {
  return (
    <div>
      <h2>Welcome, {username}!</h2>
      <h3>Logged-in Users:</h3>
      <ul>
        {users.map((user) => (
          <li key={user.username}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
