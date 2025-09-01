import React from 'react';

const LoginPage = ({ onLoginSuccess }) => {
  const handleSignIn = (event) => {
    event.preventDefault();
    onLoginSuccess();
  };

  return (
    <div className="h-screen w-screen bg-cover bg-center flex items-center justify-center px-4" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
      <div className="bg-brand-white bg-opacity-90 p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-md">
        <img src="https://placehold.co/150x50/1D1D1B/FAFAF9?text=Ploxi+Consults" alt="Ploxi Consults Logo" className="mx-auto mb-6" />
        <h1 className="text-2xl font-bold text-center text-brand-black mb-6">Sign In</h1>
        <form onSubmit={handleSignIn}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-brand-black text-sm font-semibold mb-2">Email Address</label>
            <input type="email" id="email" placeholder="e.g., name@company.com" className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-brand-black text-sm font-semibold mb-2">Password</label>
            <input type="password" id="password" placeholder="•••••••••" className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue" />
          </div>
          <div className="text-right mb-6"><a href="#" className="text-sm text-brand-blue hover:underline">Forgot Password?</a></div>
          <button type="submit" className="w-full bg-brand-green text-white font-bold py-3 px-4 rounded-md hover:bg-opacity-90 transition duration-300">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
