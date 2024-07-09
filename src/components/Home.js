import React, { useEffect, useState } from 'react';
import { getReportsFromBlockchain } from '../blockchain/blockchainService';
import '../styles/main.css';

const Home = () => {
  const [reports, setReports] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const reports = await getReportsFromBlockchain();
        setReports(reports);
      } catch (err) {
        setError('Error fetching reports from blockchain.');
        console.error(err);
      }
    };
    fetchReports();
  }, []);

  return (
    <div>
      <h1>Medical Reports</h1>
      {error ? <p>{error}</p> : null}
      <ul>
        {reports.map((report, index) => (
          <li key={index}>
            <p>Patient ID: {report.patientID}</p>
            <p>Report Type: {report.reportType}</p>
            <p>Date: {report.date}</p>
            <p>Report Data: {report.reportData}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
