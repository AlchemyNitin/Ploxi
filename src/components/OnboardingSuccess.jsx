import React from 'react';

const OnboardingSuccess = ({ onNext, goal }) => {
    return (
        <div className="h-screen w-screen bg-brand-gradient flex items-center justify-center px-4">
            <div className="bg-brand-white p-8 rounded-xl shadow-lg w-full max-w-md text-center">
                <div className="text-6xl mb-4">🎉</div>
                <h1 className="text-2xl font-bold text-brand-black">You're All Set!</h1>
                <p className="text-gray-600 mb-6">We've personalized your dashboard to focus on your goal of **{goal}**.</p>
                <button onClick={onNext} className="w-full bg-brand-green text-white font-bold py-3 px-4 rounded-md hover:bg-opacity-90">Go to Your Dashboard</button>
            </div>
        </div>
    );
};

export default OnboardingSuccess;
