import React from 'react';

const Footer = () => (
    <footer className="bg-brand-black text-brand-white">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-sm">
            <p>&copy; 2025 Ploxi Consults. All Rights Reserved.</p>
            <div className="mt-2 space-x-4">
                <a href="#" className="hover:underline">Privacy Policy</a>
                <span>|</span>
                <a href="#" className="hover:underline">Terms of Service</a>
                <span>|</span>
                <a href="#" className="hover:underline">Contact Us</a>
            </div>
        </div>
    </footer>
);

export default Footer;
