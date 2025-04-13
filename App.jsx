import React, { useState, useEffect } from 'react';
import BusinessDashboard from './BusinessDashboard';
import BusinessOverview from './BusinessOverview';
import MarketAnalysis from './MarketAnalysis';
import ServiceProcess from './ServiceProcess';
import FinancialPlan from './FinancialPlan';
import RiskSocialStrategy from './RiskSocialStrategy';
import './print.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [printMode, setPrintMode] = useState(false);
  
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
  
  const handlePrint = () => {
    setPrintMode(true);
    setTimeout(() => {
      window.print();
      setPrintMode(false);
    }, 300);
  };
  
  return (
    <div className={`App ${darkMode ? 'dark' : ''} ${printMode ? 'print-mode' : ''}`}>
      <div className="fixed top-4 right-4 z-50 flex space-x-2 no-print">
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
        >
          {darkMode ? '🌞' : '🌙'}
        </button>
        <button 
          onClick={handlePrint}
          className="px-3 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700"
        >
          PDF 저장
        </button>
      </div>
      
      <div className="container mx-auto py-8">
        <BusinessDashboard />
        
        <div className="page-break"></div>
        <BusinessOverview />
        
        <div className="page-break"></div>
        <MarketAnalysis />
        
        <div className="page-break"></div>
        <ServiceProcess />
        
        <div className="page-break"></div>
        <FinancialPlan />
        
        <div className="page-break"></div>
        <RiskSocialStrategy />
      </div>
    </div>
  );
}

export default App; 