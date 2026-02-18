import React from 'react';

const TechStack = () => {
    const techs = [
        { name: 'REACT', color: 'text-cyan-400' },
        { name: 'NODE.JS', color: 'text-green-500' },
        { name: 'AWS', color: 'text-orange-500' },
        { name: 'PYTHON', color: 'text-yellow-400' },
        { name: 'DOCKER', color: 'text-blue-500' },
        { name: 'TYPESCRIPT', color: 'text-blue-400' },
        { name: 'NEXT.JS', color: 'text-white' },
        { name: 'POSTGRESQL', color: 'text-blue-300' },
    ];

    return (
        <section id="tech" className="py-16 bg-navy-800 border-y border-white/5 overflow-hidden">
            <div className="container mx-auto px-6 mb-8 text-center">
                <p className="text-gray-500 uppercase tracking-[0.2em] text-sm">Powered by modern technologies</p>
            </div>

            {/* Marquee Effect */}
            <div className="relative flex overflow-x-hidden">
                <div className="py-4 animate-marquee whitespace-nowrap flex gap-16 min-w-full">
                    {[...techs, ...techs, ...techs].map((tech, i) => (
                        <span key={i} className={`text-2xl font-bold font-display opacity-70 hover:opacity-100 transition-opacity ${tech.color}`}>
                            {tech.name}
                        </span>
                    ))}
                </div>

                {/* CSS for marquee animation defined here or index.css, using inline style for simplicity to ensure it works immediately */}
                <style>{`
            @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
            .animate-marquee {
                animation: marquee 30s linear infinite;
            }
        `}</style>
            </div>
        </section>
    );
};

export default TechStack;
