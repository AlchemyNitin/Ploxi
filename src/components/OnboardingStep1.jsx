import React from 'react';

const OnboardingStep1 = ({ onNext }) => {
    return (
        <div className="h-screen bg-brand-light-green w-screen bg-cover bg-center flex items-center justify-center px-4">
            <div className="bg-white  p-8 rounded-xl shadow-lg w-full max-w-md text-center">
                <img src="ploxi earth.jpg" alt="Ploxi Consults Logo" className="max-h-40 w-auto mx-auto mb-4" />
                <h1 className="text-2xl font-bold text-brand-black">Welcome to Ploxi</h1>
                <p className="text-gray-600 mb-6">Let's get your account set up.</p>
                <form onSubmit={(e) => { e.preventDefault(); onNext(); }} className="text-left">
                    <div className="mb-4"><label className="block text-brand-black text-sm font-semibold mb-2">Full Name</label><input type="text" placeholder="e.g., Ananya Sharma" className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md" /></div>
                    <div className="mb-4"><label className="block text-brand-black text-sm font-semibold mb-2">Company Name</label><input type="text" placeholder="e.g., Fictional Manufacturing Corp." className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md" /></div>
                    <div className="mb-6"><label className="block text-brand-black text-sm font-semibold mb-2">Industry</label><select className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md"><option>Manufacturing</option><option>Technology</option><option>Retail</option><option>Healthcare</option></select></div>
                    <button type="submit" className="w-full bg-brand-green text-white font-bold py-3 px-4 rounded-md hover:bg-opacity-90">Next</button>
                </form>
            </div>
        </div>
    );
};

export default OnboardingStep1;
