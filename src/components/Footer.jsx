import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black py-8 border-t border-gray-900 text-sm">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">

                <div className="flex items-center gap-2">
                    <span className="font-display font-bold text-xl text-white"><span className="text-cyan-400">AMMS</span> GROUP</span>
                </div>

                <div className="text-gray-500">
                    © {new Date().getFullYear()} AMMS Group. All rights reserved.
                </div>

                <div className="flex gap-6">
                    <a href="#" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="text-gray-500 hover:text-white transition-colors">Terms of Service</a>
                    <a href="#" className="text-gray-500 hover:text-white transition-colors">LinkedIn</a>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
