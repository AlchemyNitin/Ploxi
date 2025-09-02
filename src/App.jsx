import React, { useState } from 'react';

// Layout
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import WelcomeScreen from './components/WelcomeScreen';
import HolisticDashboardPage from './components/HolisticDashboardPage';
import MarketplacePage from './components/MarketplacePage';
import ComparePage from './components/ComparePage';
import VendorProfilePage from './components/VendorProfilePage';
import ProjectManagementPage from './components/ProjectManagementPage';
import FinancialIntelligencePage from './components/FinancialIntelligencePage';
import CompliancePage from './components/CompliancePage';
import IntegrationsPage from './components/IntegrationsPage';
import CarbonFootprintPage from './components/CarbonFootprintPage';
import BenchmarkingPage from './components/BenchmarkingPage'; // ✅ added

function App() {
  const [currentPage, setCurrentPage] = useState('welcome');
  const [userConfig, setUserConfig] = useState(null);

  const handleNavigate = (page) => setCurrentPage(page);

  const handleBuildDashboard = (config) => {
    setUserConfig(config);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setUserConfig(null);
    setCurrentPage('welcome');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'welcome':
        return <WelcomeScreen onBuildDashboard={handleBuildDashboard} />;
      case 'dashboard':
        return (
          <HolisticDashboardPage
            config={userConfig}
            onNavigateToMarketplace={() => handleNavigate('marketplace')}
            onNavigateToCarbon={() => handleNavigate('carbonFootprint')}
          />
        );
      case 'marketplace':
        return (
          <MarketplacePage
            onNavigateToCompare={() => handleNavigate('compare')}
            onNavigateToProfile={() => handleNavigate('vendorProfile')}
          />
        );
      case 'compare':
        return <ComparePage onNavigateToProfile={() => handleNavigate('vendorProfile')} />;
      case 'vendorProfile':
        return <VendorProfilePage onNavigateToProject={() => handleNavigate('projectManagement')} />;
      case 'projectManagement':
        return <ProjectManagementPage onNavigate={handleNavigate} />;
      case 'financialIntelligence':
        return (
          <FinancialIntelligencePage
            onNavigateToCompliance={() => handleNavigate('compliance')}
          />
        );
      case 'compliance':
        return <CompliancePage onNavigate={handleNavigate} />;
      case 'integrations':
        return <IntegrationsPage />;
      case 'carbonFootprint':
        return <CarbonFootprintPage />;
      case 'benchmarking': // ✅ new route
        return <BenchmarkingPage />;
      default:
        return <WelcomeScreen onBuildDashboard={handleBuildDashboard} />;
    }
  };

  const showHeaderFooter = currentPage !== 'welcome';

  return (
    <div className="App font-sans flex flex-col min-h-screen">
      {showHeaderFooter && <Header onNavigate={handleNavigate} onLogout={handleLogout} />}
      <main className="flex-grow">{renderPage()}</main>
      {showHeaderFooter && <Footer />}
    </div>
  );
}

export default App;
