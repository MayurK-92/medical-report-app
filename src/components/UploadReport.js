import React, { useState } from 'react';
import axios from 'axios';
import { addReportToBlockchain } from '../blockchain/blockchainService';

function UploadReport() {
  const [patientID, setPatientID] = useState('');
  const [reportType, setReportType] = useState('');
  const [date, setDate] = useState('');
  const [reportData, setReportData] = useState('');

  const handleSubmit = async () => {
    const response = await axios.post('http://localhost:3000/addReport', {
      patientID,
      reportType,
      date,
      reportData,
    });
    console.log(response.data);

    // Add to blockchain
    await addReportToBlockchain({ patientID, reportType, date, reportData });
  };

  return (
    <div>
      <h2>Upload Medical Report</h2>
      <input
        type="text"
        placeholder="Patient ID"
        value={patientID}
        onChange={(e) => setPatientID(e.target.value)}
      />
      <input
        type="text"
        placeholder="Report Type"
        value={reportType}
        onChange={(e) => setReportType(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <textarea
        placeholder="Report Data"
        value={reportData}
        onChange={(e) => setReportData(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default UploadReport;
