import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getReportsFromBlockchain } from '../blockchain/blockchainService';

function ViewReports() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      const response = await axios.get('http://localhost:3000/reports');
      setReports(response.data);

      // Fetch from blockchain
      const blockchainReports = await getReportsFromBlockchain();
      setReports(blockchainReports);
    };
    fetchReports();
  }, []);

  return (
    <div>
      <h2>Medical Reports</h2>
      {reports.map((report, index) => (
        <div key={index}>
          <p>Patient ID: {report.patientID}</p>
          <p>Report Type: {report.reportType}</p>
          <p>Date: {report.date}</p>
          <p>Report Data: {report.reportData}</p>
        </div>
      ))}
    </div>
  );
}

export default ViewReports;
