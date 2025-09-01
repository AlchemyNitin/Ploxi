import React, { useState } from 'react';

// Layout Components
import Header from './components/Header';
import Footer from './components/Footer';

// Onboarding Components
import OnboardingStep1 from './components/OnboardingStep1';
import OnboardingStep2 from './components/OnboardingStep2';
import OnboardingSuccess from './components/OnboardingSuccess';

// Main Page Components
import DashboardPage from './components/DashboardPage';
import MarketplacePage from './components/MarketplacePage';
import ComparePage from './components/ComparePage';
import VendorProfilePage from './components/VendorProfilePage';
import ProjectManagementPage from './components/ProjectManagementPage';
import FinancialIntelligencePage from './components/FinancialIntelligencePage';
import CompliancePage from './components/CompliancePage';
import IntegrationsPage from './components/IntegrationsPage';

function App() {
  const [currentPage, setCurrentPage] = useState('onboarding1');
  const [userGoal, setUserGoal] = useState('Energy'); // Default goal

  const handleNavigate = (page) => setCurrentPage(page);
  const handleLogout = () => {
      setUserGoal('Energy');
      setCurrentPage('onboarding1');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'onboarding1': return <OnboardingStep1 onNext={() => handleNavigate('onboarding2')} />;
      case 'onboarding2': return <OnboardingStep2 onNext={() => handleNavigate('onboardingSuccess')} onSelectGoal={setUserGoal} selectedGoal={userGoal} />;
      case 'onboardingSuccess': return <OnboardingSuccess onNext={() => handleNavigate('dashboard')} goal={userGoal} />;
      case 'dashboard': return <DashboardPage onNavigateToMarketplace={() => handleNavigate('marketplace')} goal={userGoal} />;
      case 'marketplace': return <MarketplacePage onNavigateToCompare={() => handleNavigate('compare')} onNavigateToProfile={() => handleNavigate('vendorProfile')} />;
      case 'compare': return <ComparePage onNavigateToProfile={() => handleNavigate('vendorProfile')} />;
      case 'vendorProfile': return <VendorProfilePage onNavigateToProject={() => handleNavigate('projectManagement')} />;
      case 'projectManagement': return <ProjectManagementPage onNavigate={handleNavigate} />;
      case 'financialIntelligence': return <FinancialIntelligencePage onNavigate={handleNavigate} onNavigateToCompliance={() => handleNavigate('compliance')} />;
      case 'compliance': return <CompliancePage onNavigate={handleNavigate} />;
      case 'integrations': return <IntegrationsPage onNavigate={handleNavigate} />;
      default: return <OnboardingStep1 onNext={() => handleNavigate('onboarding2')} />;
    }
  };

  const isOnboarding = currentPage.startsWith('onboarding');

  return (
    <div className="App font-sans flex flex-col min-h-screen">
      {!isOnboarding && <Header onNavigate={handleNavigate} onLogout={handleLogout} />}
      <main className="flex-grow">
        {renderPage()}
      </main>
      {!isOnboarding && <Footer />}
    </div>
  );
}

export default App;