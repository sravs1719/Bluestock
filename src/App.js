import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IPOList from './components/IPOList';
import IPODetail from './components/IPODetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminDashboard, { SIPCalculator, SWPCalculator, BrokerageCalculator, MarginCalculator } from './components/AdminDashboard';

function App() {
  return (
    <Router>
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<IPOList />} />
          <Route path="/ipo/:id" element={<IPODetail />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/calculator/sip" element={<SIPCalculator />} />
          <Route path="/calculator/swp" element={<SWPCalculator />} />
          <Route path="/calculator/brokerage" element={<BrokerageCalculator />} />
          <Route path="/calculator/margin" element={<MarginCalculator />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;