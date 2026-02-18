import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-navy-900 text-white min-h-screen">
      <Navbar />
      <Hero />
      <div className="relative z-20 bg-navy-900">
        <Services />
        <TechStack />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
