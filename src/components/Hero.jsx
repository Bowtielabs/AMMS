import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';

const LogoSVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full">
        {/* Top triangle: Dark Navy */}
        <polygon points="0,0 100,0 50,50" fill="#1B2A3E" />
        {/* Right triangle: Orange */}
        <polygon points="100,0 100,100 50,50" fill="#FF6040" />
        {/* Bottom triangle: Cyan */}
        <polygon points="100,100 0,100 50,50" fill="#00E5FF" />
        {/* Left triangle: Slate Blue */}
        <polygon points="0,100 0,0 50,50" fill="#3D5068" />
    </svg>
);

const Hero = () => {
    return (
        <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-navy-900">

            {/* Background Elements */}
            <div className="absolute inset-0 w-full h-full">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse-glow" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-orange-500/10 rounded-full blur-[120px]" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="mb-8 inline-block"
                >
                    {/* Inline SVG Logo - crisp at any size, no white borders */}
                    <div className="w-36 h-36 md:w-44 md:h-44 mx-auto mb-6 hover:scale-105 transition-transform duration-500 drop-shadow-[0_0_30px_rgba(0,229,255,0.2)]">
                        <LogoSVG />
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-5xl md:text-7xl font-bold mb-4 tracking-tight"
                >
                    Integrated Tech <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                        & Development
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-xl text-gray-400 max-w-2xl mx-auto mb-10"
                >
                    We build the digital infrastructure of tomorrow.
                    Enterprise-grade solutions for complex challenges.
                </motion.p>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <a href="#services" className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] flex items-center justify-center gap-2 group">
                        Our Solutions
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href="#contact" className="px-8 py-4 border border-gray-600 hover:border-cyan-400 text-gray-300 hover:text-white rounded-lg transition-all backdrop-blur-sm">
                        Contact Us
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500"
            >
                <ChevronDown size={32} />
            </motion.div>
        </section>
    );
};

export default Hero;
