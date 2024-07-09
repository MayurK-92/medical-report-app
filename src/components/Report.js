import React, { useState } from 'react';
import { addReportToBlockchain } from '../blockchain/blockchainService';
import '../styles/main.css';

const Report = () => {
  const [report, setReport] = useState({
    patientID: '',
    reportType: '',
    date: '',
    reportData: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReport((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addReportToBlockchain(report);
    // Clear the form
    setReport({
      patientID: '',
      reportType: '',
      date: '',
      reportData: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Patient ID:</label>
        <input type="text" name="patientID" value={report.patientID} onChange={handleChange} />
      </div>
      <div>
        <label>Report Type:</label>
        <input type="text" name="reportType" value={report.reportType} onChange={handleChange} />
      </div>
      <div>
        <label>Date:</label>
        <input type="text" name="date" value={report.date} onChange={handleChange} />
      </div>
      <div>
        <label>Report Data:</label>
        <input type="text" name="reportData" value={report.reportData} onChange={handleChange} />
      </div>
      <button type="submit">Add Report</button>
    </form>
  );
};

export default Report;
