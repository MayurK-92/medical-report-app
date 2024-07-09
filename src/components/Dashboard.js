import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <Link to="/upload">Upload Medical Report</Link>
      <br />
      <Link to="/reports">View Medical Reports</Link>
    </div>
  );
}

export default Dashboard;
