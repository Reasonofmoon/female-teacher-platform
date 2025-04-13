import { useState, useEffect } from 'react';

const SummaryTab = () => (
  <div className="space-y-8">
    {/* 기존 summary 탭 내용 */}
  </div>
);

const OverviewTab = () => (
  // Implementation of OverviewTab component
);

const MarketTab = () => (
  // Implementation of MarketTab component
);

const ServiceTab = () => (
  // Implementation of ServiceTab component
);

const FinancialTab = () => (
  // Implementation of FinancialTab component
);

const RiskTab = () => (
  // Implementation of RiskTab component
);

const [currentTime, setCurrentTime] = useState(new Date());

useEffect(() => {
  const timer = setInterval(() => {
    setCurrentTime(new Date());
  }, 1000);
  
  return () => clearInterval(timer);
}, []);

const renderContent = () => {
  switch (activeTab) {
    case 'overview': return <OverviewTab />;
    case 'market': return <MarketTab />;
    case 'service': return <ServiceTab />;
    case 'financial': return <FinancialTab />;
    case 'risk': return <RiskTab />;
    case 'summary':
    default: return <SummaryTab />;
  }
}; 