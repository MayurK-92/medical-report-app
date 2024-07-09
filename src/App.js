import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Report from './components/Report';
import { testConnection } from './blockchain/blockchainService';
import './styles/main.css';

const App = () => {
  useEffect(() => {
    testConnection();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/report" element={<Report />} />
      </Routes>
    </Router>
  );
};

export default App;
