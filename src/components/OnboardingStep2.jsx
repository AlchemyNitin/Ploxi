import React from 'react';

const OnboardingStep2 = ({ onNext, onSelectGoal, selectedGoal }) => {
    const goals = [
        { id: 'Energy', title: 'Reduce Energy Consumption', icon: '⚡️' },
        { id: 'Water', title: 'Conserve Water', icon: '💧' },
        { id: 'Waste', title: 'Minimize Waste', icon: '♻️' },
        { id: 'Air', title: 'Track Air Emissions', icon: '💨' }
    ];
    return (
        <div className="h-screen w-screen bg-brand-gradient flex items-center justify-center px-4">
            <div className="bg-brand-white p-8 rounded-xl shadow-lg w-full max-w-2xl text-center">
                <h1 className="text-2xl font-bold text-brand-black">What's Your Primary Goal?</h1>
                <p className="text-gray-600 mb-8">Select one to help us personalize your dashboard.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {goals.map(goal => (
                        <div key={goal.id} onClick={() => onSelectGoal(goal.id)} className={`p-6 border-2 rounded-lg cursor-pointer transition-all ${selectedGoal === goal.id ? 'border-brand-blue bg-blue-50' : 'border-gray-300 hover:border-brand-blue'}`}>
                            <div className="text-4xl mb-2">{goal.icon}</div>
                            <h2 className="font-semibold">{goal.title}</h2>
                        </div>
                    ))}
                </div>
                <button onClick={onNext} disabled={!selectedGoal} className="w-full bg-brand-green text-white font-bold py-3 px-4 rounded-md hover:bg-opacity-90 disabled:bg-gray-400 disabled:cursor-not-allowed">Next</button>
            </div>
        </div>
    );
};

export default OnboardingStep2;
