import React from 'react';

const Header = ({ onNavigate, onLogout }) => (
  <header className="bg-white shadow-md sticky top-0 z-50">
    <div className="    max-w-full mx-auto px-2 sm:px-3 lg:px-4">
      <div className="flex justify-between items-center py-2">
        {/* LOGO */}
        <div
          className="flex items-center space-x-2 cursor-pointer mr-auto" 
          onClick={() => onNavigate('dashboard')}
        >
          <img
            src="ploxi earth.jpg"
            alt="Ploxi Consults Logo"
            className="h-20 w-auto m-0"
          />
        </div>

        {/* NAVIGATION */}
        <nav className="hidden md:flex items-center space-x-4 ml-auto">
          <button
            onClick={() => onNavigate('dashboard')}
            className="text-gray-600 hover:text-brand-teal font-medium"
          >
            Dashboard
          </button>
          <button
            onClick={() => onNavigate('marketplace')}
            className="text-gray-600 hover:text-brand-teal font-medium"
          >
            Marketplace
          </button>
          <button
            onClick={() => onNavigate('projectManagement')}
            className="text-gray-600 hover:text-brand-teal font-medium"
          >
            Projects
          </button>
          <button
            onClick={() => onNavigate('compliance')}
            className="text-gray-600 hover:text-brand-teal font-medium"
          >
            Compliance
          </button>
          <button
            onClick={onLogout}
            className="bg-brand-blue text-white font-bold py-2 px-4 rounded-md hover:bg-opacity-90 transition duration-300"
          >
            Logout
          </button>
        </nav>
      </div>
    </div>
  </header>
);

export default Header;
